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

    public class TeilnahmeController : Controller
    {
        private readonly ITeilnahmeRepository _repository;

        public TeilnahmeController(ITeilnahmeRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<KursTeilnahme> GetTeilnahmen()
        {
            return _repository.GetTeilnahmen();
        }

    }
}
