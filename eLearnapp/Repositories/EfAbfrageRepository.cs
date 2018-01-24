﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eLearnapp.Models;

namespace eLearnapp.Repositories
{
    public class EfAbfrageRepository : IAbfrageRepository
    {
        private readonly KursContext _db;

        public EfAbfrageRepository(KursContext db)
        {
            _db = db;
        }

        public Abfrage CreateAbfrage(Abfrage abfrage)
        {
            _db.Abfragen.Add(abfrage);
            _db.SaveChanges(); //Sorgt dafür, dass die Änderung persistiert wird
            return abfrage;
        }

        public void DeleteAbfrage(int Id)
        {
            var abfrage = _db.Abfragen.Find(Id);

            if (abfrage != null)
            {
                _db.Abfragen.Remove(abfrage);
                _db.SaveChanges();
            }
        }

        public Abfrage GetAbfrageById(int Id)
        {
            return _db.Abfragen.Find(Id);
        }

        public IEnumerable<Abfrage> GetAbfragen(int Id)
        {
           var query = (from p in _db.Abfragen
                                     where p.KursID == Id                                    
                                     select p).ToList();
            return query;
        }

        public Abfrage UpdateAbfrage(Abfrage abfrage)
        {
            var AbfrageToUpdate = _db.Abfragen.Find(abfrage.Id);

            AbfrageToUpdate.Frage = abfrage.Frage;
            AbfrageToUpdate.Antwort = abfrage.Frage;
            
            _db.SaveChanges();
            return AbfrageToUpdate;
        }
    }
}
