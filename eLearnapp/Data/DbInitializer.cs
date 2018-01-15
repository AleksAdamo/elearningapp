﻿using eLearnapp.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Data
{
    public class DbInitializer
    {
        public static void Initialize(KursContext db, IHostingEnvironment env)
        {
            db.Database.EnsureCreated();
            if(db.Users.Any() || db.Kategorien.Any() || db.Kurse.Any())
            {
                return;
            }

            var path = Path.Combine(env.ContentRootPath, "Data");
            //Inhalt lesen
            var usersJson = File.ReadAllText(Path.Combine(path, "users.json"));
            var kategorienJson = File.ReadAllText(Path.Combine(path, "kategorien.json"));
            var kurseJson = File.ReadAllText(Path.Combine(path, "kurse.json"));
            //deserialisieren
            var users = JsonConvert.DeserializeObject<List<User>>(usersJson);
            var kategorien = JsonConvert.DeserializeObject<List<Kategorie>>(kategorienJson);
            var kurse = JsonConvert.DeserializeObject<List<Kurs>>(kurseJson);
            //im DbContext speichern
            foreach (var user in users)
            {
                user.UserID = 0;
                db.Users.Add(user);
            }
            foreach (var kategorie in kategorien)
            {
                foreach (var kurs in kurse.Where(x => x.KategorieID == kategorie.KategorieID))
                {
                    kurs.KursID = 0;
                    kategorie.Kurse.Add(kurs);
                }
                kategorie.KategorieID = 0;
                db.Kategorien.Add(kategorie);
            }
            db.SaveChanges();
        }
    }
}