using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Models
{
    public class KursContext : DbContext
    {
        //Kontext um Optionen zu übergeben
        public KursContext(DbContextOptions<KursContext> options):base(options)
        {

        }

        //für jede Entität die wir verwalten, brauchen wir einen DbSet
        public DbSet<User> Users { get; set; }
        public DbSet<Kategorie> Kategorien { get; set; }
        public DbSet<Kurs> Kurse { get; set; }
        public DbSet<KursTeilnahme> KursTeilnahmen { get; set; }
    }
}
