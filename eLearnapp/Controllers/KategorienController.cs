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

    public class KategorienController : Controller
    {

        private readonly IKategorieRepository _repository;

        public KategorienController(IKategorieRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Kategorie> GetKategorien()
        {
            return _repository.GetKategorien();
        }

        [HttpGet("{KategorieID}")]
        public IActionResult Get(int KategorieID) //ActionResult liefert auch 404 zurück
        {

            var kategorie = _repository.GetKategorieById(KategorieID);
            if (kategorie == null)
            {
                return NotFound();
            }

            return Ok(kategorie);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Kategorie kategorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = _repository.CreateKategorie(kategorie);
            return CreatedAtAction("GetKategorien", new { id = kategorie.KategorieID }, result);
        }

        [HttpPut("{KategorieID}")]
        public IActionResult Put(int KategorieID, [FromBody] Kategorie kategorie)
        {
            if (KategorieID != kategorie.KategorieID)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (_repository.GetKategorieById(KategorieID) == null)
            {
                return NotFound();
            }

            var result = _repository.UpdateKategorie(kategorie);
            return Ok(result);
        }

        [HttpDelete("{KategorieID}")]
        public IActionResult Delete(int KategorieID)
        {
            if (_repository.GetKategorieById(KategorieID) == null)
            {
                return NotFound();
            }
            _repository.DeleteKategorie(KategorieID);
            return NoContent(); //Statuscode 204
        }

    }
}
