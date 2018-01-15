using eLearnapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Repositories
{
    public interface IKursRepository
    {
        IEnumerable<Kurs> GetKurse();
        Kurs GetKursById(int KursID);
        Kurs CreateKurs(Kurs kurs);
        Kurs UpdateKurs(Kurs kurs);
        void DeleteKurs(int KursID);
    }
}
