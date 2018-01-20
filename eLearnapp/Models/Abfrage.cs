using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace eLearnapp.Models
{
    public class Abfrage
    {
        public int AbfrageID { get; set; }

        [Required]
        [MaxLength(500)]
        public string Frage { get; set; }
    
        [Required]
        [MaxLength(500)]
        public string Antwort { get; set; }

        //Fremdschlüssel
        public int KursID { get; set; }
        //Verweisobjekt
        public Kategorie Kurs { get; set; }
    }
}
