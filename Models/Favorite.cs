using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Favorite
    {
        public int FavId { get; set; }
        public int? DogId { get; set; }
        public int? IsAvailable { get; set; }
        public int? ProfileId { get; set; }

        public virtual Profile Profile { get; set; }
    }
}
