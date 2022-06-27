using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TicketApi;
using TicketApi.Models;

//  PMC
//  add - migration init
//  update-database

var builder = WebApplication.CreateBuilder(args);

{
    var server = builder.Configuration["db_container"];
    var port = builder.Configuration["db_port"];
    var database = builder.Configuration["db_name"];
    var user = builder.Configuration["db_username"];
    var password = builder.Configuration["db_password"];

    var connectionString = $"Server={server}.{port};Initial Catalog={database};User ID={user};Password={password}";

    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(connectionString));

    builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

    builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,

            ValidAudience = builder.Configuration["Jwt:ValidAudience"],
            ValidIssuer = builder.Configuration["Jwt:ValidIssuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Secret"])),
        };
    });

    builder.Services.AddControllers();

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
}

var app = builder.Build();

{
    //if (app.Environment.IsDevelopment())
    //{
    app.UseSwagger();
    app.UseSwaggerUI();
    //}

    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();

    app.Run();
}

////https://github.com/mohamadlawand087/MinimalApi-JWT/blob/main/TodoApi/Program.cs

//var builder = WebApplication.CreateBuilder(args);

//{
//    builder.Services.AddAuthentication(options =>
//    {
//        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
//    }).AddJwtBearer(options =>
//    {
//        options.TokenValidationParameters = new TokenValidationParameters
//        {
//            ValidIssuer = builder.Configuration["Jwt:Issuer"],
//            ValidAudience = builder.Configuration["Jwt:Audience"],
//            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
//            ValidateIssuer = true,
//            ValidateAudience = true,
//            ValidateLifetime = true,
//            ValidateIssuerSigningKey = true,
//        };
//    });

//    builder.Services.AddAuthentication();
//    builder.Services.AddAuthorization();
//}

//var app = builder.Build();

//app.MapPost("/auth/login", [AllowAnonymous] (UserDto user) =>
//{
//    if (user.Username == builder.Configuration["Admin:Username"] && user.Password == builder.Configuration["Admin:Password"])
//    {
//        var secureKey = Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]);

//        var issuer = builder.Configuration["Jwt:Issuer"];
//        var audience = builder.Configuration["Jwt:Audience"];
//        var securityKey = new SymmetricSecurityKey(secureKey);
//        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512);

//        var jwtTokenHandler = new JwtSecurityTokenHandler();

//        var tokenDescriptor = new SecurityTokenDescriptor
//        {
//            Subject = new ClaimsIdentity(new[] {
//                new Claim(JwtRegisteredClaimNames.Sub, user.Username),
//                new Claim(JwtRegisteredClaimNames.Email, user.Username),
//                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
//            }),
//            Expires = DateTime.Now.AddMinutes(15),
//            Audience = audience,
//            Issuer = issuer,
//            SigningCredentials = credentials,
//        };

//        var token = jwtTokenHandler.CreateToken(tokenDescriptor);
//        var jwtToken = jwtTokenHandler.WriteToken(token);
//        return Results.Ok(jwtToken);
//    }

//    return Results.Unauthorized();
//});

//app.UseAuthentication();
//app.UseAuthorization();

//app.MapGet("/", () => "Hello from Minimal API");
//app.Run();

////app.MapGet("/", () => "Hello World!");
////app.MapGet("/zz", () => "zz -> Hello World!");