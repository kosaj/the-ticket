using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using TicketApi.Models;

var builder = WebApplication.CreateBuilder(args);
{
    var services = builder.Services;
    var configuration = builder.Configuration;
    services.AddAuthentication(opt =>
    {
        opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,

            ValidIssuer = configuration["Jwt:Issuer"],
            ValidAudience = configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]))
        };
    });
    //services.AddCors();
    services.AddControllers();
}

var app = builder.Build();
{
    app.UseAuthentication();
    app.UseAuthorization();
}

app.MapPost("/api/auth/login", [AllowAnonymous] (UserDto user) =>
{
    return Results.Unauthorized();
});

app.Run();

//app.MapGet("/", () => "Hello World!");
//app.MapGet("/zz", () => "zz -> Hello World!");