using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Models
{
    public class Kategorie
    {

        public Kategorie()
        {
            //ICollection initialisieren
            Kurse = new HashSet<Kurs>();
        }

        public int KategorieID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        //Klasse muss seine FKs kennen
        //virtual ist besser für das Lazy Loading
        public virtual ICollection<Kurs> Kurse { get; set; }

    }
}
