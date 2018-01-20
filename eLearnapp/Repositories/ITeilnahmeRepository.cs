using eLearnapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Repositories
{
    public interface ITeilnahmeRepository
    {
        IEnumerable<KursTeilnahme> GetTeilnahmen();
    }
}
