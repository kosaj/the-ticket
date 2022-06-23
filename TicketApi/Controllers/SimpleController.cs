using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TicketApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SimpleController : ControllerBase
    {
        public SimpleController() { }

        [HttpGet]
        public IEnumerable<string> GetSomething() => new string[] { "jajko", "placki" };
    }
}
