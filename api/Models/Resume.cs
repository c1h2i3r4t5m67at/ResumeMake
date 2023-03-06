using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Resume
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(60)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(60)")]
        public int UserId { get; set; }
        [Column(TypeName = "nvarchar(60)")]
        public string UrlId { get; set; }
        [Column(TypeName = "nvarchar(60)")]
        public string FullName { get; set; }
        [Column(TypeName = "nvarchar(60)")]
        public string JobTitle { get; set; }
        [Column(TypeName = "nvarchar(60)")]
        public string Location { get; set; }
        [Column(TypeName = "nvarchar(60)")]
        public string Phone { get; set; }
        public IEnumerable<Experience> Experiances { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

    }
}
