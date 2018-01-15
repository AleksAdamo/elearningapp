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
    public class FileKursRepository : IKursRepository
    {
        private readonly string _path;

        public FileKursRepository(IHostingEnvironment env)
        {
            _path = Path.Combine(env.ContentRootPath, "Data", "kurse.json");
        }

        public Kurs CreateKurs(Kurs kurs)
        {
            kurs.KursID = 99;
            return kurs;
        }

        public void DeleteKurs(int KursID)
        {
            
        }

        public Kurs GetKursById(int KursID)
        {
            return GetKurse()?.FirstOrDefault(x => x.KursID == KursID);
        }

        public IEnumerable<Kurs> GetKurse()
        {
            var json = File.ReadAllText(_path);
            return JsonConvert.DeserializeObject<IEnumerable<Kurs>>(json);
        }

        public Kurs UpdateKurs(Kurs kurs)
        {
            return kurs;
        }
    }
}
