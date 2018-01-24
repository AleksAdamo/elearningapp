using eLearnapp.Models;
using eLearnapp.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Controllers
{
    [Route("api/[controller]")]

    public class AbfragenController : Controller
    {
        private readonly IAbfrageRepository _repository;

        public AbfragenController(IAbfrageRepository repository)
        {
            _repository = repository;
        }


        [HttpGet("{Id}")]
        public IEnumerable<Abfrage> GetAbfragen(int Id)
        {
            return _repository.GetAbfragen(Id);
        }
        [HttpPost]
        public IActionResult Post([FromBody] Abfrage abfrage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = _repository.CreateAbfrage(abfrage);
            return CreatedAtAction("GetAbfragen", new { id = abfrage.Id }, result);
        }

        [HttpPut("{Id}")]
        public IActionResult Put(int Id, [FromBody] Abfrage abfrage)
        {
            if (Id != abfrage.Id)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (_repository.GetAbfrageById(Id) == null)
            {
                return NotFound();
            }

            var result = _repository.UpdateAbfrage(abfrage);
            return Ok(result);
        }

        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            if (_repository.GetAbfrageById(Id) == null)
            {
                return NotFound();
            }
            _repository.DeleteAbfrage(Id);
            return NoContent();
        }
    }
}
