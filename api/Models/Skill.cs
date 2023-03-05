namespace api.Models
{
    public class Skill
    {
        public int Id { get; set; }
        public int? ExperianceId { get; set; }
        public Experience Experiance { get; set; }

        public string Name { get; set; }
        public int Level { get; set; }
        public bool IsTopSkill { get; set; }
    }
}
