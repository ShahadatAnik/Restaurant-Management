namespace server.Models
{
    public class Purchase
    {
        public int Id { get; set; } = -1;
        public int ItemId { get; set; }
        public string? ItemName { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
