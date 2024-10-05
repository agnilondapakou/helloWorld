using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using helloWorld.Model;

namespace helloWorld.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HelloWorldController(AppDbContext context)
        {
            _context = context;
        }

        // Récupérer toutes les entrées HelloWorld
        [HttpGet(Name = "GetHelloWorlds")]
        public async Task<IEnumerable<HelloWorld>> Get()
        {
            return await _context.HelloWorlds.ToListAsync();  // Corrigé à HelloWorlds
        }

        // Récupérer un HelloWorld par ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHelloWorldById(int id)
        {
            var helloWorld = await _context.HelloWorlds.FindAsync(id);  // Corrigé à HelloWorlds
            if (helloWorld == null)
            {
                return NotFound($"HelloWorld with ID {id} not found.");
            }
            return Ok(helloWorld);
        }

        // Ajouter une nouvelle entrée HelloWorld
        [HttpPost]
        public async Task<IActionResult> PostHelloWorld([FromBody] HelloWorld helloWorld)
        {
            if (helloWorld == null)
            {
                return BadRequest("HelloWorld data is null.");
            }

            _context.HelloWorlds.Add(helloWorld);  // Corrigé à HelloWorlds
            await _context.SaveChangesAsync();
            return Ok(helloWorld);
        }

        // Mettre à jour une entrée HelloWorld existante
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHelloWorld(int id, [FromBody] HelloWorld updatedHelloWorld)  // Corrigé de Comptable à HelloWorld
        {
            if (id != updatedHelloWorld.Id)
            {
                return BadRequest("HelloWorld ID mismatch.");
            }

            var helloWorld = await _context.HelloWorlds.FindAsync(id);  // Corrigé de CelloWorlds à HelloWorlds
            if (helloWorld == null)
            {
                return NotFound("HelloWorld not found.");
            }

            // Mise à jour des propriétés de l'objet HelloWorld
            helloWorld.Name = updatedHelloWorld.Name;
          

            _context.Entry(helloWorld).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(helloWorld);
        }

        // Supprimer une entrée HelloWorld
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHelloWorld(int id)  // Corrigé de Comptable à HelloWorld
        {
            var helloWorld = await _context.HelloWorlds.FindAsync(id);  // Corrigé de HelloWorldS à HelloWorlds
            if (helloWorld == null)
            {
                return NotFound("HelloWorld not found.");
            }

            _context.HelloWorlds.Remove(helloWorld);  // Corrigé de HelloWorldS à HelloWorlds
            await _context.SaveChangesAsync();

            return Ok($"HelloWorld entry with ID {id} deleted.");
        }
    }
}
