using AuctionService.Data;
using Microsoft.AspNetCore.Connections;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddControllers(); // Añadir controladores
// builder.Services.AddEndpointsApiExplorer(); // Para que funcione OpenAPI correctamente (Swagger)
// builder.Services.AddSwaggerGen(); // Configura Swagger para usarlo

builder.Services.AddDbContext<AuctionDbContext>(opt =>
{
    opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// app.UseHttpsRedirection();

app.MapControllers();

try
{
    DbInitializer.InitDb(app);
} 
catch(Exception e)
{
    Console.WriteLine(e);
    // throw
}


app.Run();
