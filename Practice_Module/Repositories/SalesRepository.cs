using Practice_Module.Models;
using SalesApp.Models;
using Microsoft.EntityFrameworkCore;

namespace SalesApp.Repositories
{
    public class SalesRepository : ISalesRepository
    {
        private readonly AppDbContext _context;

        public SalesRepository(AppDbContext context)
        {
            _context = context;
        }

        // Add new Sale
        public async Task<Sale> Add(Sale sale)
        {
            _context.Sales.Add(sale);
            await _context.SaveChangesAsync();   
            return sale;                         
        }

        // Get all Sales
        public async Task<List<Sale>> GetAll()
        {
            return await _context.Sales.ToListAsync();
        }
    }
}
