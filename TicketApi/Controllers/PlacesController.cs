using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicketApi.Models;

namespace TicketApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PlacesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public PlacesController(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Place>>> Get()
        {
            return Ok(await _context.Places.ToListAsync());
        }
    }
}
