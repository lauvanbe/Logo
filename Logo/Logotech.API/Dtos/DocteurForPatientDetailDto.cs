namespace Logotech.API.Dtos
{
    public class DocteurForPatientDetailDto
    {
        public int Inami { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Email { get; set; }
        public int TelFixe { get; set; }
        public int Gsm { get; set; }
        public string Specialisation { get; set; }
        public string Fonction { get; set; }        
    }
}