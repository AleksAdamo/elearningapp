import { Abfrage } from "../abfragen/abfrage";

export class Kurs {
    kursID: number;
    name: string = "";
    beschreibung: string = "";
    kategorieID: number;
    abfragen: Abfrage[];
}