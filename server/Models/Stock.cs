namespace server.Models
{
    public class Stock
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Quantity { get; set; }
        public string? Description { get; set; }
    }
}
