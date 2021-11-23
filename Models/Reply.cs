using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Reply
    {
        public int ReplyId { get; set; }
        public string ReplyMessage { get; set; }
        public DateTime? ReplyTimestamp { get; set; }
        public int? ProfileId { get; set; }
        public int? TopicId { get; set; }

        public virtual Profile Profile { get; set; }
        public virtual Topic Topic { get; set; }
    }
}
