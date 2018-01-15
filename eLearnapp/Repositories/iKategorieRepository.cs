using eLearnapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Repositories
{
    public interface IKategorieRepository
    {
        IEnumerable<Kategorie> GetKategorien();
        Kategorie GetKategorieById(int KategorieID);
        Kategorie CreateKategorie(Kategorie kategorie);
        Kategorie UpdateKategorie(Kategorie kategorie);
        void DeleteKategorie(int KategorieID);

    }
}
