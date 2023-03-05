using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Models
{
    public class ResumeDbContext : DbContext
    {
        public ResumeDbContext(DbContextOptions<ResumeDbContext> options) : base(options)
        {

        }
        public DbSet<Resume> Resumes { get; set; }
        public DbSet<User> Users { get; set; } = default!;
        public DbSet<api.Models.Experience> Experience { get; set; } = default!;
        public DbSet<api.Models.Skill> Skill { get; set; } = default!;
    }
}
