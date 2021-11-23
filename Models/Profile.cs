using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Profile
    {
        public Profile()
        {
            Favorites = new HashSet<Favorite>();
            Replies = new HashSet<Reply>();
            Topics = new HashSet<Topic>();
        }

        public int ProfileId { get; set; }
        public string ProfileName { get; set; }
        public string ProfileStreetaddress { get; set; }
        public string ProfileCity { get; set; }
        public string ProfileState { get; set; }
        public string ProfileZipcode { get; set; }
        public int ProfileAge { get; set; }
        public string ProfileHomephone { get; set; }
        public string ProfilePersonalphone { get; set; }
        public string ProfileEmail { get; set; }
        public string ProfileOccupation { get; set; }
        public string ProfileSpousename { get; set; }
        public int ProfileChildren { get; set; }
        public int ProfileDwellingid { get; set; }
        public int ProfileHasyard { get; set; }
        public string ProfileLandlordname { get; set; }
        public string ProfileLandlordphone { get; set; }
        public string ProfileOtherpetname { get; set; }
        public string ProfileOtherpetbreed { get; set; }
        public string ProfileOtherpetsex { get; set; }
        public int? ProfileOtherpetage { get; set; }
        public int ProfileFamilyallergies { get; set; }
        public string ProfileResponsiblefordog { get; set; }
        public string ProfileAdoptionreason { get; set; }
        public string ProfileDogsleepat { get; set; }
        public string ProfileDogaggresive { get; set; }
        public string ProfileMedfordog { get; set; }
        public string ProfileNocaredog { get; set; }

        public virtual Dwelling ProfileDwelling { get; set; }
        public virtual ICollection<Favorite> Favorites { get; set; }
        public virtual ICollection<Reply> Replies { get; set; }
        public virtual ICollection<Topic> Topics { get; set; }
    }
}
