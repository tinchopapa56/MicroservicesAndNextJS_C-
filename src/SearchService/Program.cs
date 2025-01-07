using MongoDB.Driver;
using MongoDB.Entities;
using SearchService;
using SearchService.Data;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.MapOpenApi();
}

app.MapControllers();

try{
    await DbInitializer.InitDb(app); //Static Helper
} 
catch(Exception e)
{
    Console.WriteLine(e);
}

// app.UseHttpsRedirection();

app.Run();
