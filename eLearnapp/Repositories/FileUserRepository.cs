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
    public class FileUserRepository : IUserRepository
    {
        private readonly string _path; //Um den Pfad zusammenzustellen und auslesen zu können
        
        public FileUserRepository(IHostingEnvironment env) //Pfad zu user.json angeben
        {
            _path = Path.Combine(env.ContentRootPath, "Data", "users.json");
        }

        public User CreateUser(User user)
        {
            user.UserID = 99;
            return user;
        }

        public void DeleteUser(int UserID)
        {
           
        }

        public User GetUserById(int UserID)
        {
            return GetUsers()?.FirstOrDefault(x => x.UserID == UserID);
        }

        public IEnumerable<User> GetUsers()
        {
            //1. Inhalt lesen
            var json = File.ReadAllText(_path);

            //2. Deserialisieren
            return JsonConvert.DeserializeObject<IEnumerable<User>>(json); //gibt eine Auflistung von User zurück
        }

        public User UpdateUser(User user)
        {
            return user;
        }
    }
}
