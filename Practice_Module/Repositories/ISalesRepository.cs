using SalesApp.Models;

namespace SalesApp.Repositories
{
    public interface ISalesRepository
    {
        Task<Sale> AddSaleAsync(Sale sale);
        Task<List<Sale>> GetAllSalesAsync();
    }
}
