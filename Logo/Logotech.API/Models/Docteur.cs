using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

/* Modèle de données pour les docteurs */

namespace Logotech.API.Models
{
    public class Docteur
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Le numéro INAMI est requis.")]
        [Display(Name = "Numéro INAMI")]
        [Range(1, 11)]
        public int Inami { get; set; }

        [Required(ErrorMessage = "Le nom est requis.")]
        [Display(Name = "Nom")]
        [StringLength(55)]
        public string Nom { get; set; }

        [Required(ErrorMessage = "Le prénom est requis.")]
        [Display(Name = "Prénom")]
        [StringLength(55)]
        public string Prenom { get; set; }

        [Required(ErrorMessage = "Email du logopède requis.")]
        [Display(Name = "Adresse Email")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }

        [Display(Name = "Téléphone fixe")]
        public int? TelFixe { get; set; }

        [Display(Name = "Gsm")]
        public int? Gsm { get; set; }

        [Display(Name = "Specialisation")]
        [StringLength(55)]
        public string Specialisation { get; set; }   

        [Display(Name = "Fonction")]
        [StringLength(55)]
        public string Fonction { get; set; }

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

    }
}
