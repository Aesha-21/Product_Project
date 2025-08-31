using SalesApp.Models;

namespace SalesApp.Repositories
{
    public class SalesRepository : ISalesRepository
    {
        // Temporary in-memory list instead of DB
        private static readonly List<Sale> _sales = new();
        private static int _idCounter = 1;

        public Task<Sale> AddSaleAsync(Sale sale)
        {
            sale.Id = _idCounter++;
            _sales.Add(sale);
            return Task.FromResult(sale);
        }

        public Task<List<Sale>> GetAllSalesAsync()
        {
            return Task.FromResult(_sales);
        }
    }
}
