using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Models
{
    public class KursTeilnahme
    {

        public int ID { get; set; }

        //FK_User
        public int UserID { get; set; }
        public User User { get; set; }

        public int KursID { get; set; }
        public Kurs Kurs { get; set; }
    }
}
