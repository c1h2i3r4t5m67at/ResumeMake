using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewResumesController : ControllerBase
    {
        private readonly ResumeDbContext _context;

        public NewResumesController(ResumeDbContext context)
        {
            _context = context;
        }

        // GET: api/NewResumes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewResume>>> GetResumes()
        {
          if (_context.Resumes == null)
          {
              return Ok();
          }
            return await _context.Resumes.ToListAsync();
        }

        // GET: api/NewResumes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NewResume>> GetNewResume(int id)
        {
          if (_context.Resumes == null)
          {
              return NotFound();
          }
            var newResume = await _context.Resumes.FindAsync(id);

            if (newResume == null)
            {
                return NotFound();
            }

            return newResume;
        }

        // PUT: api/NewResumes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNewResume(int id, NewResume newResume)
        {
            if (id != newResume.UserId)
            {
                return BadRequest();
            }

            _context.Entry(newResume).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewResumeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/NewResumes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<NewResume>> PostNewResume(NewResume newResume)
        {
          if (_context.Resumes == null)
          {
              return Problem("Entity set 'ResumeDbContext.Resumes'  is null.");
          }
            _context.Resumes.Add(newResume);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/NewResumes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNewResume(int id)
        {
            if (_context.Resumes == null)
            {
                return NotFound();
            }
            var newResume = await _context.Resumes.FindAsync(id);
            if (newResume == null)
            {
                return NotFound();
            }

            _context.Resumes.Remove(newResume);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NewResumeExists(int id)
        {
            return (_context.Resumes?.Any(e => e.UserId == id)).GetValueOrDefault();
        }
    }
}
