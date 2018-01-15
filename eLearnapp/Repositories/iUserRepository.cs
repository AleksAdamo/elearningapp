using eLearnapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Repositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetUsers();
        User GetUserById(int UserID);
        User CreateUser(User user);
        User UpdateUser(User user);
        void DeleteUser(int UserID);
    }
}
