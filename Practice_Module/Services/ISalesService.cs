using SalesApp.Models;

namespace SalesApp.Services
{
    public interface ISalesService
    {
        Task<Sale> CreateSaleAsync(Sale sale);
        Task<List<Sale>> GetAllSalesAsync();
    }
}
