using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Dwelling
    {
        public Dwelling()
        {
            Profiles = new HashSet<Profile>();
        }

        public int DwellingId { get; set; }
        public string DwellingType { get; set; }

        public virtual ICollection<Profile> Profiles { get; set; }
    }
}
