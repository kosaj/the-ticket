namespace TicketApi.Models
{
    public partial class Place
    {
        public Guid PlaceId { get; set; }
        public string Name { get; set; } = string.Empty;
        public virtual Address Address { get; set; }
    }
}