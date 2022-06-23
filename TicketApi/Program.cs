using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
{
    var services = builder.Services;
    //services.AddAuthentication(opt =>
    //{
    //    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    //    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    //}).AddJwtBearer(options =>
    //{
    //    options.TokenValidationParameters = new TokenValidationParameters
    //    {
    //        ValidateIssuer = true,
    //        ValidateAudience = true,
    //        ValidateLifetime = true,
    //        ValidateIssuerSigningKey = true,

    //        ValidIssuer = "http://localhost:7000",
    //        ValidAudience = "http://localhost:7000",
    //        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@123"))
    //    };
    //});
    //services.AddCors();
    services.AddControllers();
}


var app = builder.Build();
{
    //app.UseCors(configurePolicy =>
    //{
    //    configurePolicy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    //});

    //app.UseAuthentication();
    //app.UseAuthorization();

    app.MapControllers();
}

app.Run();


//app.MapGet("/", () => "Hello World!");
//app.MapGet("/zz", () => "zz -> Hello World!");


