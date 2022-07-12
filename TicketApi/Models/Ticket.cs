namespace TicketApi.Models
{
    public partial class Ticket
    {
        public Guid TicketId { get; set; }
        public Guid UserId { get; set; }
        
        public DateTime CreatedAt { get; set; }
        public bool Active { get; set; }
        public virtual Show Show { get; set; }
    }
}
