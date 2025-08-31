using SalesApp.Models;
using SalesApp.Repositories;

namespace SalesApp.Services
{
    public class SalesService : ISalesService
    {
        private readonly ISalesRepository _repository;

        public SalesService(ISalesRepository repository)
        {
            _repository = repository;
        }

        public async Task<Sale> CreateSaleAsync(Sale sale)
        {
            // Business logic: auto-calc totals
            sale.PurchaseTotal = sale.Nos * sale.PurchasePrice;
            sale.SellingTotal = sale.Nos * sale.SellingPrice;
            sale.Difference = sale.SellingTotal - sale.PurchaseTotal;

            return await _repository.AddSaleAsync(sale);
        }

        public async Task<List<Sale>> GetAllSalesAsync()
        {
            return await _repository.GetAllSalesAsync();
        }
    }
}
