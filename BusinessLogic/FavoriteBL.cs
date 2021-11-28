using DataAccess;
using Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;


namespace BusinessLogic
{

    public class FavoriteBL : BaseBL<Favorite>, IFavoriteBL
    {
        protected readonly IFavoriteRepository favoriteRepository;

        public FavoriteBL(IFavoriteRepository favoriteRepository) : base(favoriteRepository)
        {
            this.favoriteRepository = favoriteRepository;
        }

        public Favorite GetByIdWithNav(int query)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Favorite> SearchByDogId(int query)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Favorite> SearchByProfileId(int query)
        {
            throw new NotImplementedException();
        }
    }
}