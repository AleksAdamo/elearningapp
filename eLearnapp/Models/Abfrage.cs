using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Models
{
    public class Abfrage
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(300)]
        public string Frage { get; set; }
        [Required]
        [MaxLength(300)]
        public string Antwort { get; set; }
        public int KursID { get; set; }
        public Kurs Kurs { get; set; }
    }
}
