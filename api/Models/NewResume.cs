﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class NewResume
    {
        [Key]
        public int UserId { get; set; }
        [Column(TypeName = "nvarchar(60)")]
        public string? Name { get; set; }
    }
}
