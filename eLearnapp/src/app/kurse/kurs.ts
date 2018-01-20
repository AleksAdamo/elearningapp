import { Abfrage } from "../abfragen/abfrage";

export class Kurs {
    kursID: number;
    name: string = "";
    kategorieID: number;
    abfragen: Abfrage[];
}