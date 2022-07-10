using Microsoft.EntityFrameworkCore;

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

                if (context!.Places.Any() || context!.Shows.Any() || context!.Tickets.Any() || context!.Addresses.Any())
                {
                    Console.WriteLine("Adding data - seending...");
                }
                else
                {
                    Console.WriteLine("Already have data - not seeding");
                }

                context!.SaveChanges();
            }
        }
    }
}