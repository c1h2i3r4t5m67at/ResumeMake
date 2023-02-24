using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Users
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string UserName { get; set; }
        [Column(TypeName = "nvarchar(16)")]
        public string Password { get; set; }
    }
}
