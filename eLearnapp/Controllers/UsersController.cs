using eLearnapp.Models;
using eLearnapp.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Controllers
{
    //Damit der Controller gefunden werden kann
    [Route("api/[controller]")]

    public class UsersController : Controller
    {
        private readonly IUserRepository _repository;

        //Dependancy Injection
        public UsersController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpGet] //Um Daten auszugeben
        public IEnumerable<User> GetUsers()
        {
            return _repository.GetUsers();
        }

        [HttpGet("{UserID}")]
        public IActionResult Get(int UserID) //ActionResult liefert auch 404 zurück
        {
            //User holen und ID übergeben
            var user = _repository.GetUserById(UserID);
            if(user == null)
            {
                return NotFound(); //Statuscode 404
            }

            return Ok(user); //Statuscode 200
        }

        [HttpPost]
        public IActionResult PostUser([FromBody] User user) //hilft beim deserialisiren -> daten werden im anfragekörper mitgeschickt
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState); //Statuscode 400
            }
            var result = _repository.CreateUser(user);
            return CreatedAtAction("GetUsers", new { id = user.UserID }, result);
        }

        [HttpPut("{UserID}")] //Für vollständige Änderungen
        public IActionResult Put(int UserID, [FromBody] User user)
        {
            if(UserID != user.UserID) //Wenn der falsche wert gesendet wird
            {
                return BadRequest();
            }
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            if(_repository.GetUserById(UserID) == null) //wenn es den Datensatz nicht mehr gibt
            {
                return NotFound();
            }

            var result = _repository.UpdateUser(user);
            return Ok(result);
        }

        [HttpDelete("{UserID}")]
        public IActionResult Delete(int UserID)
        {
            if(_repository.GetUserById(UserID) == null)
            {
                return NotFound();
            }
            _repository.DeleteUser(UserID);
            return NoContent(); //Statuscode 204
        }
    }
}
