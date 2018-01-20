using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eLearnapp.Models;
using Microsoft.EntityFrameworkCore;

namespace eLearnapp.Repositories
{
    public class EfUserRepository : IUserRepository
    {
        //Context wird benötigt, um mit dem EF arbeiten zu können
        private readonly KursContext _db;

        public EfUserRepository(KursContext db)
        {
            _db = db;
        }

        public User CreateUser(User user)
        {
            _db.Users.Add(user);
            _db.SaveChanges(); //Sorgt dafür, dass die Änderung persistiert wird
            return user;
        }

        public void DeleteUser(int UserID)
        {
            //1. Datensatz laden
            var user = _db.Users.Find(UserID);

            if(user != null)
            {
                _db.Users.Remove(user);
                _db.SaveChanges();
            }
        }

        public User GetUserById(int UserID)
        {
            return _db.Users.Find(UserID);
        }

        public IEnumerable<User> GetUsers()
        {
            return _db.Users.Include(x => x.KursTeilnahmen);
        }

        public User UpdateUser(User user)
        {
            //1.Entität laden
            var userToUpdate = _db.Users.Find(user.UserID);

            userToUpdate.Email = user.Email;
            userToUpdate.Vorname = user.Vorname;
            userToUpdate.Nachname = user.Nachname;
            userToUpdate.Passwort = user.Passwort;
            _db.SaveChanges();
            return userToUpdate;
        }
    }
}
