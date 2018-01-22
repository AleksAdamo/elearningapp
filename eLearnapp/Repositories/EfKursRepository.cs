using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eLearnapp.Models;
using Microsoft.EntityFrameworkCore;

namespace eLearnapp.Repositories
{
    public class EfKursRepository : IKursRepository
    {
        private readonly KursContext _db;

        public EfKursRepository(KursContext db)
        {
            _db = db;
        }

        public Kurs CreateKurs(Kurs kurs)
        {
            _db.Kurse.Add(kurs);
            _db.SaveChanges(); //Sorgt dafür, dass die Änderung persistiert wird
            return kurs;
        }

        public void DeleteKurs(int KursID)
        {
            var kurs = _db.Kurse.Find(KursID);

            if (kurs != null)
            {
                _db.Kurse.Remove(kurs);
                _db.SaveChanges();
            }
        }

        public Kurs GetKursById(int KursID)
        {
            return _db.Kurse.Find(KursID);
        }

        public IEnumerable<Kurs> GetKurse()
        {
            return _db.Kurse.Include(x => x.Abfrage);
        }

        public Kurs UpdateKurs(Kurs kurs)
        {
            var kursToUpdate = _db.Kurse.Find(kurs.KursID);

            kursToUpdate.Name = kurs.Name;
            kursToUpdate.Beschreibung = kurs.Beschreibung;
            kursToUpdate.KategorieID = kurs.KategorieID;

            _db.SaveChanges();
            return kursToUpdate;
        }
    }
}
