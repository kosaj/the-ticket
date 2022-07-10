namespace TicketApi.Models
{
    public class Show
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public DateTime Date { get; set; }
        public int Availability { get; set; }
    }
}
