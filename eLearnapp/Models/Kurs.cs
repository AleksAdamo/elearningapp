using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Models
{
    public class Kurs
    {

        public Kurs()
        {
            Kursteilnahmen = new HashSet<KursTeilnahme>();
        }

        public int KursID { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        //Fremdschlüssel
        public int KategorieID { get; set; }
        //Verweisobjekt
        public Kategorie Kategorie { get; set; }

        public virtual ICollection<KursTeilnahme> Kursteilnahmen { get; set; }

    }
}
