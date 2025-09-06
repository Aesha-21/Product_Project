using SalesApp.Models;

namespace SalesApp.Repositories
{
    public interface ISalesRepository
    {
        Task<Sale> Add(Sale sale);      
        Task<List<Sale>> GetAll();      
    }
}
