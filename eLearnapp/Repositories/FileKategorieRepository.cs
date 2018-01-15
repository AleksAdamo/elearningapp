using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using eLearnapp.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace eLearnapp.Repositories
{
    public class FileKategorieRepository : IKategorieRepository
    {
        private readonly string _path;

        public FileKategorieRepository(IHostingEnvironment env)
        {
            _path = Path.Combine(env.ContentRootPath, "Data", "kategorien.json");
        }

        public Kategorie CreateKategorie(Kategorie kategorie)
        {
            kategorie.KategorieID = 99;
            return kategorie;
        }

        public void DeleteKategorie(int KategorieID)
        {
            
        }

        public Kategorie GetKategorieById(int KategorieID)
        {
            return GetKategorien()?.FirstOrDefault(x => x.KategorieID == KategorieID);
        }

        public IEnumerable<Kategorie> GetKategorien()
        {
            var json = File.ReadAllText(_path);
            return JsonConvert.DeserializeObject<IEnumerable<Kategorie>>(json);
        }

        public Kategorie UpdateKategorie(Kategorie kategorie)
        {
            return kategorie;
        }
    }
}
