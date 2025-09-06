using Practice_Module.Models;
using SalesApp.Models;

namespace SalesApp.Services
{
    public interface ISalesService
    {
        Task<Sale> CreateSaleAsync(SaleDto sale);
        Task<List<Sale>> GetAllSalesAsync();
    }
}
