using Microsoft.AspNetCore.Mvc;
using SalesApp.Models;
using SalesApp.Services;

namespace SalesApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
        private readonly ISalesService _service;

        public SalesController(ISalesService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> CreateSale([FromBody] Sale sale)
        {
            if (sale == null)
                return BadRequest("Invalid data");

            var result = await _service.CreateSaleAsync(sale);
            return Ok(new { Message = "Sale record created successfully", Data = result });
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSales()
        {
            var sales = await _service.GetAllSalesAsync();
            return Ok(sales);
        }
    }
}
