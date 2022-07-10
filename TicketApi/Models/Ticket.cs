namespace TicketApi.Models
{
    public class Ticket
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid ShowId { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool Active { get; set; }
    }
}
