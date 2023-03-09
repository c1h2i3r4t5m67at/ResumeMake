﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Entities;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResumeController : ControllerBase
    {
        private readonly ResumeDbContext _context;

        public ResumeController(ResumeDbContext context)
        {
            _context = context;
        }

        // GET: api/Resume
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Resume>>> GetResumes()
        {
          if (_context.Resumes == null)
          {
              return NotFound();
          }
            return await _context.Resumes.ToListAsync();
        }

        // GET: api/Resume/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Resume>> GetResume(int id)
        {
          if (_context.Resumes == null)
          {
              return NotFound();
          }
            var resume = await _context.Resumes.FindAsync(id);

            if (resume == null)
            {
                return NotFound();
            }

            return resume;
        }

        [Route("[action]/{UserId}")]
        [HttpGet]
        public async Task<ActionResult<Resume>> GetByUser(int UserId)
        {
            var resume = await _context.Resumes.Where(r => r.UserId == UserId).ToListAsync();
            if (resume == null)
            {
                return NotFound();
            }
            return Ok(resume);
        }

        // PUT: api/Resume/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutResume(int id, Resume resume)

        {
            if (id != resume.Id)
            {
                return BadRequest();
            }
     
            _context.Entry(resume).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResumeExists(id))
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

        // POST: api/Resume
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Resume>> PostResume(ResumeCreateDto createDto)
        {
          if (_context.Resumes == null)
          {
             
              return Problem("Entity set 'ResumeDbContext.Resumes'  is null.");
          }
            var resume = new Resume();
            _context.Resumes.Add(resume);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetResume",resume);
        }

        // DELETE: api/Resume/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResume(int id)
        {
            if (_context.Resumes == null)
            {
                return NotFound();
            }
            var resume = await _context.Resumes.FindAsync(id);
            if (resume == null)
            {
                return NotFound();
            }

            _context.Resumes.Remove(resume);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ResumeExists(int id)
        {
            return (_context.Resumes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
