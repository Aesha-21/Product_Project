using Microsoft.AspNetCore.Mvc;
using SalesApp.Models;
using Practice_Module.Models;
using SalesApp.Services;
using System.Threading.Tasks;

namespace SalesApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
       private readonly ISalesService _salesService;

        public SalesController(ISalesService salesService) { 
            _salesService = salesService;
        }

        [HttpPost]
        public async Task<ActionResult<Sale>> CreateSale([FromBody] SaleDto dto)
        {
            if (dto == null) return BadRequest("Invalid Data");

            var sale = await _salesService.CreateSaleAsync(dto);
            return Ok(sale);
            
        }

        [HttpGet]
        public async Task<ActionResult<List<Sale>>> GetAll()
        {
            var sales = await _salesService.GetAllSalesAsync();
            return Ok(sales);
        }
    }
}


