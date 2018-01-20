using eLearnapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Repositories
{
    public interface IAbfrageRepository
    {
        IEnumerable<Abfrage> GetAbfragen();
        Abfrage GetAbfrageById(int Id);
        Abfrage CreateAbfrage(Abfrage abfrage);
        Abfrage UpdateAbfrage(Abfrage abfrage);
        void DeleteAbfrage(int Id);
    }
}
