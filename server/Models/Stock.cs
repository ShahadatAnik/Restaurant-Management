namespace server.Models
{
    public class Stock
    {
        public int Id { get; set; } = -1;
        public string? Name { get; set; }
        public decimal Quantity { get; set; } = 0;
        public string? Description { get; set; }
    }
}
