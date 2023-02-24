using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class ResumeDbContext : DbContext
    {
        public ResumeDbContext(DbContextOptions<ResumeDbContext> options) : base(options)
        {

        }
        public DbSet<NewResume> Resumes { get; set; }
    }
}
