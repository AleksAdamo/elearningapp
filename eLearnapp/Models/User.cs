using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Models
{
    public class User
    {

        public User()
        {
            KursTeilnahmen = new HashSet<KursTeilnahme>(); 
        }

        public int UserID { get; set; }
        [Required]
        [MaxLength(50)]
        public string Email { get; set; }
        [Required]
        [MaxLength(30)]
        public string Vorname { get; set; }
        [Required]
        [MaxLength(30)]
        public string Nachname { get; set; }
        //[Required]
        [MaxLength(20)]
        public string Passwort { get; set; }

        public Usertyp Usertyp { get; set; }

        public virtual ICollection<KursTeilnahme> KursTeilnahmen { get; set; }
    }
}
