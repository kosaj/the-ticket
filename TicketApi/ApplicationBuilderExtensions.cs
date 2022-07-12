using Microsoft.EntityFrameworkCore;
using TicketApi.Models;

namespace TicketApi
{
    public static class ApplicationBuilderExtensions
    {
        public static void SeedDatabase(this IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>();

                if (context == null)
                {
                    throw new InvalidOperationException();
                }

                Console.WriteLine("Applying Migrations...");
                context!.Database.Migrate();

                if (context!.Addresses.Any())
                {
                    Console.WriteLine("Adding data - seending...");
                    var addresses = new List<Address>();

                    addresses.Add(new Address
                    {
                        Id = Guid.Parse("b0b3a21a-d99a-491c-b1bb-4ba6996148ae"),
                        City = "Katowice",
                        Line1 = "plac Sejmu Śląskiego 2",
                        Postcode = "40-032"
                    });
                }

                if (context!.Places.Any())
                {
                    Console.WriteLine("Adding data - seending...");
                    var places = new List<Place>();

                    places.Add(new Place { });
                }

                if (context!.Shows.Any())
                {
                    Console.WriteLine("Adding data - seending...");
                    var shows = new List<Show>();

                    shows.Add(new Show
                    {
                        ShowId = Guid.Parse("c058c083-618e-4e5c-9693-283471f4a740"),
                        Name = "KOLEGA MELA GIBSONA",
                        Availability = 300,
                        Description = "Tekściarz, satyryk i konferansjer Tomasz Jachimek napisał Kolegę Mela Gibsona na pohybel artystom..",
                        Duration = 140,
                        Price = 90,
                        Date = new DateTime(2022, 07, 28)
                    });
                }

                context!.SaveChanges();

                if (context!.Places.Any() || context!.Shows.Any() || context!.Tickets.Any())
                {
                    Console.WriteLine("Adding data - seending...");

                    context!.SaveChanges();
                }
                else
                {
                    Console.WriteLine("Already have data - not seeding");
                }
            }
        }
    }
}