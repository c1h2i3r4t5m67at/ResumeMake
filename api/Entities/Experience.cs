namespace api.Entities
{
    public class Experience
    {
        public int Id { get; set; }
        public int? ResumeId { get; set; }
        public Resume Resume { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsStillWorkingHere { get; set; }
        public string Role { get; set; }
        public string OrganisationName { get; set; }
        public string Description { get; set; }
        public string Responsibilities { get; set; }
       
    }
}
