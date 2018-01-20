using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eLearnapp.Models;

namespace eLearnapp.Repositories
{
    public class EfTeilnahmeRepository : ITeilnahmeRepository
    {
        private readonly KursContext _db;

        public EfTeilnahmeRepository(KursContext db)
        {
            _db = db;
        }

        public IEnumerable<KursTeilnahme> GetTeilnahmen()
        {
            return _db.KursTeilnahmen;
        }
    }
}
