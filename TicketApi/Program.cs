using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TicketApi.Models;

var builder = WebApplication.CreateBuilder(args);

{
    builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
        };
    });

    builder.Services.AddAuthentication();
    builder.Services.AddAuthorization();
}

var app = builder.Build();

app.MapPost("/auth/login", [AllowAnonymous] (UserDto user) =>
{
    return Results.Unauthorized();
});

app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/", () => "Hello from Minimal API");
app.Run();

//app.MapGet("/", () => "Hello World!");
//app.MapGet("/zz", () => "zz -> Hello World!");