using System.Collections.Generic;
using Models;

namespace DataAccess
{
    public interface IFavoriteRepository : IRepository<Favorite>
    {
        Favorite GetByIdWithNav(int query);
        IEnumerable<Profile> SearchByProfileId(int query);
        IEnumerable<Profile> SearchByDogId(int query);
    }
}