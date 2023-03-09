using Microsoft.EntityFrameworkCore;
using api.Entities;

namespace api.Entities
{
    public class ResumeDbContext : DbContext
    {
        public ResumeDbContext(DbContextOptions<ResumeDbContext> options) : base(options)
        {

        }
        public DbSet<Resume> Resumes { get; set; }
        public DbSet<User> Users { get; set; } = default!;
        public DbSet<Experience> Experience { get; set; } = default!;
        public DbSet<Skill> Skill { get; set; } = default!;
    }
}
