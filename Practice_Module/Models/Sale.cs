namespace SalesApp.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public string Party { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public int Nos { get; set; }
        public decimal PurchasePrice { get; set; }
        public decimal PurchaseTotal { get; set; }
        public decimal SellingPrice { get; set; }
        public decimal SellingTotal { get; set; }
        public decimal Difference { get; set; }
        public DateTime DeliveryDate { get; set; }
    }
}
