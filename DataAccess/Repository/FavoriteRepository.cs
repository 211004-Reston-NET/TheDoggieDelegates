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

        public IEnumerable<Favorite> SearchByDogId(int query)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Favorite> SearchByProfileId(int query)
        {
            throw new System.NotImplementedException();
        }
    }
}