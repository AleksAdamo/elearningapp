using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eLearnapp.Models;
using Microsoft.EntityFrameworkCore;

namespace eLearnapp.Repositories
{
    public class EfKategorieRepository : IKategorieRepository
    {
        private readonly KursContext _db;

        public EfKategorieRepository(KursContext db)
        {
            _db = db;
        }

        public Kategorie CreateKategorie(Kategorie kategorie)
        {
            _db.Kategorien.Add(kategorie);
            _db.SaveChanges(); //Sorgt dafür, dass die Änderung persistiert wird
            return kategorie;
        }

        public void DeleteKategorie(int KategorieID)
        {
            var kategorie = _db.Kategorien.Find(KategorieID);

            if (kategorie != null)
            {
                _db.Kategorien.Remove(kategorie);
                _db.SaveChanges();
            }
        }

        public Kategorie GetKategorieById(int KategorieID)
        {
            return _db.Kategorien.Find(KategorieID);
        }

        public IEnumerable<Kategorie> GetKategorien()
        {
            return _db.Kategorien.Include(x => x.Kurse);
        }

        public Kategorie UpdateKategorie(Kategorie kategorie)
        {
            var kategorieToUpdate = _db.Kategorien.Find(kategorie.KategorieID);

            kategorieToUpdate.Name = kategorie.Name;

            _db.SaveChanges();
            return kategorieToUpdate;
        }
    }
}
