namespace TicketApi.Models
{
    public class Show
    {
        public Guid ShowId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public float Price { get; set; }
        public DateTime Date { get; set; }
        public int Availability { get; set; }
        public int Duration { get; set; }

        public virtual Place Place { get; set; }
    }
}
