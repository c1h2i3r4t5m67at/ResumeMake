using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class ResumeCreateDto
    {
      
        public string Name { get; set; }
            
        public string FullName { get; set; }
       
        public string JobTitle { get; set; }
        
        public string Location { get; set; }
        
        public string Phone { get; set; }
     

    }
}
