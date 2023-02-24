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
        public DbSet<Users> Users { get; set; } = default!;
    }
}
