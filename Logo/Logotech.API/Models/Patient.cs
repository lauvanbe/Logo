using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

/* Modèle de données pour les patients */

namespace Logotech.API.Models
{
    public class Patient
    {
       public int Id { get; set; }

        [Required(ErrorMessage = "Le nom est requis.")]
        [Display(Name = "Nom")]
        [StringLength(55)]
        public string Nom { get; set; }

        [Required(ErrorMessage = "Le prénom est requis.")]
        [Display(Name = "Prénom")]
        [StringLength(55)]
        public string Prenom { get; set; }

        [Required(ErrorMessage = "La date de naissance est requise.")]
        public DateTime DateNaissance { get; set; }

        [Required(ErrorMessage = "Email du logopède requis.")]
        [Display(Name = "Adresse Email")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }

        [Display(Name = "Téléphone fixe")]
        public int? TelFixe { get; set; }

        [Display(Name = "Gsm")]
        public int? Gsm { get; set; }

        [Display(Name= "Personne de contact")]
        public string PersonneContact { get; set; }

        [Display(Name = "Téléphone de la personne de contact")]
        public int? TelContact { get; set; }

        [Display(Name = "Anamnèse")]
        public string Anamnese { get; set; }

        [Display(Name = "Latéralité")]
        public string Lateralite { get; set; }

        [Display(Name = "Commentaire")]
        public string Commentaire { get; set; }

         [Required(ErrorMessage = "Nom de rue requis.")]
        [StringLength(55)]
        [Display(Name = "Nom de rue")]
        public string Rue { get; set; }

        [Required(ErrorMessage = "Numéro de rue requis.")]
        [Display(Name = "Numéro de rue")]
        public int NumeroRue { get; set; }

        [Display(Name = "Boîte postal")]
        public int? BoitePostal { get; set; }

        [Required(ErrorMessage = "Code Postal requis.")]
        [Display(Name = "Code postal")]
        public int CodePostal { get; set; }

        [Required(ErrorMessage = "Ville requise.")]
        [StringLength(55)]
        [Display(Name = "Ville")]
        public string Ville { get; set; }

        [Required(ErrorMessage = "Pays requis.")]
        [StringLength(55)]
        [Display(Name = "Pays")]
        public string Pays { get; set; }

        public Docteur Docteur { get; set; }
        
        public int DocteurId { get; set; }

        public ICollection<Photo> Photos { get; set; }
    }
}
