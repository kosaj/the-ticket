namespace TicketApi.Models
{
    public class Place
    {
        public Guid PlaceId { get; set; }
        public Guid AddressId { get; set; }
        public string Name { get; set; } = string.Empty;
        public Address Address { get; set; }
    }
}