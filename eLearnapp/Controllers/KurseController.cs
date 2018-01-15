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

    public class KurseController : Controller
    {
        private readonly IKursRepository _repository;

        public KurseController(IKursRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Kurs> GetKurse()
        {
            return _repository.GetKurse();
        }

        [HttpGet("{KursID}")]
        public IActionResult Get(int KursID) //ActionResult liefert auch 404 zurück
        {

            var kurs = _repository.GetKursById(KursID);
            if (kurs == null)
            {
                return NotFound();
            }

            return Ok(kurs);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Kurs kurs)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = _repository.CreateKurs(kurs);
            return CreatedAtAction("GetKurse", new { id = kurs.KursID }, result);
        }

        [HttpPut("{KursID}")]
        public IActionResult Put(int KursID, [FromBody] Kurs kurs)
        {
            if (KursID != kurs.KursID)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (_repository.GetKursById(KursID) == null)
            {
                return NotFound();
            }

            var result = _repository.UpdateKurs(kurs);
            return Ok(result);
        }

        [HttpDelete("{KursID}")]
        public IActionResult Delete(int KursID)
        {
            if (_repository.GetKursById(KursID) == null)
            {
                return NotFound();
            }
            _repository.DeleteKurs(KursID);
            return NoContent(); //Statuscode 204
        }
    }
}
