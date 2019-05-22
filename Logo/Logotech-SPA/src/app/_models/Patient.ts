import { Photo } from './photo';

export interface Patient {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    email: string;
    personneContact: string;
    anamnese: string;
    lateralite: string;
    commentaire: string;
    photoUrl: string;
    telContact?: number;
    telFixe?: number;
    gsm?: number;
    rue: string;
    numeroRue: number;
    boitePostal: number;
    codePostal: number;
    ville: string;
    pays: string;
    photos?: Photo[];
}
