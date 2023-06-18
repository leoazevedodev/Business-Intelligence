using BusinessIntelligence_API.Data;
using BusinessIntelligence_API.Dependencias;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Reflection;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();
builder.Services.AddControllers();

builder.Services
    .AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("fedaf7d8863b48e197b9287d492b708e")),
            ValidateIssuer = false,
            ValidateAudience = false
        };
        //options.TokenValidationParameters = new TokenValidationParameters
        //{
        //    ValidateIssuer = true,
        //    ValidateAudience = true,
        //    ValidateLifetime = true,
        //    ValidateIssuerSigningKey = true,
        //    ClockSkew = TimeSpan.Zero,
        //    ValidIssuer = builder.Configuration["JwtBearerTokenSettings:Issuer"],
        //    ValidAudience = builder.Configuration["JwtBearerTokenSettings:Audience"],
        //    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("fedaf7d8863b48e197b9287d492b708e"))
        //};
    });

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1",
        new OpenApiInfo
        {
            Title = "Business Intelligence",
            Version = "v1",
            Description = "API's para Business Intelligence",
            Contact = new OpenApiContact
            {
                Name = "Leonardo Azevedo",
                Url = new Uri("https://www.linkedin.com/in/leoazevedodev")
            }
        });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Token",
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                    {
                        {
                            new OpenApiSecurityScheme {
                                Reference = new OpenApiReference
                                        {
                                            Id = "Bearer",
                                            Type = ReferenceType.SecurityScheme
                                        }
                            }, new List<string> ()
                        }
                    });

});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

builder.Services.AddDependencies();

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowOrigin", builder =>
//    {
//        builder.AllowAnyOrigin()
//               .AllowAnyMethod()
//               .AllowAnyHeader();
//    });
//});

// EntityFrameWork configuration

builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("businessintelligence"));
});

//builder.Services
//    .AddIdentity<IdentityUser, IdentityRole>(options =>
//{
//    options.Password.RequireNonAlphanumeric = false;
//    options.Password.RequireDigit = false;
//    options.Password.RequireUppercase = false;
//    options.Password.RequiredLength = 6;
//})
//     .AddEntityFrameworkStores<DataContext>();

//builder.Services.AddAuthorization(options =>
//{
//    //options.FallbackPolicy = new AuthorizationPolicyBuilder()
//    //    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme) // define que o padrão de autenticação é o JWT
//    //    .RequireAuthenticatedUser()
//    //    .Build();

//    //options.AddPolicy("Admin", policy => 
//    //    policy.RequireClaim("TypePermission").RequireAuthenticatedUser()
//    //);
//});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors(x => x
   .AllowAnyOrigin()
   .AllowAnyMethod()
   .AllowAnyHeader());

app.UseAuthentication();
app.UseAuthorization();

//app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));

app.MapControllers();

app.Run();
