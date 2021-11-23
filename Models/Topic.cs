using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Topic
    {
        public Topic()
        {
            Replies = new HashSet<Reply>();
        }

        public int TopicId { get; set; }
        public string TopicName { get; set; }
        public string TopicBody { get; set; }
        public int? ProfileId { get; set; }
        public DateTime? PostTimestamp { get; set; }
        public int? CategoryId { get; set; }

        public virtual Category Category { get; set; }
        public virtual Profile Profile { get; set; }
        public virtual ICollection<Reply> Replies { get; set; }
    }
}
