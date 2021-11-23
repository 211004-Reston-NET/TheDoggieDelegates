using System.Collections.Generic;
using Models;

namespace DataAccess
{
    public class FavoriteRepository : Repository<Favorite>, IFavoriteRepository
    {
        public FavoriteRepository(PawpersDbContext context) : base(context)
        {
        }

        public Favorite GetByIdWithNav(int query)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Profile> SearchByDogId(int query)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Profile> SearchByProfileId(int query)
        {
            throw new System.NotImplementedException();
        }
    }
}