using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DataAccess
{
    public class FavoriteRepository : Repository<Favorite>, IFavoriteRepository
    {
        readonly PawpersDbContext repository;
        public FavoriteRepository(PawpersDbContext context) : base(context)
        {
            repository = context;
        }

        /// <summary>
        /// Queries DB to find single item based on the primary key 
        /// loads nav properties of the entity
        /// </summary>
        /// <param name="query">int </param>
        /// <returns>query which will be favorite ID</returns>
        public Favorite GetByIdWithNav(int query)
        {
            var Fav = repository.Favorites
                        .Include(f => f.Profile)
                        .Single(f => f.FavId.Equals(query));
            return Fav;
        }
        
        /// <summary>
        /// Queries DB to find list of favorite dogs based on favorite model's dogid field 
        /// retrieves search results of dogs with matching dogid
        /// </summary>
        /// <param name="query">int </param>
        /// <returns>query which will be favorite ID</returns>
        public IEnumerable<Favorite> SearchByDogId(int query)
        {

            var result = base.GetAll()
                        .Where(i => i.DogId.Equals(query));

            if (!result.Any())
            {
                throw new KeyNotFoundException("Value cannot be empty");
            }
            return result;

        }

        public IEnumerable<Favorite> SearchByProfileId(int query)
        {
            var result = base.GetAll()
                        .Where(i => i.ProfileId.Equals(query));
            if (!result.Any())
            {
                throw new KeyNotFoundException("No result found");
            }

            return result;


        }
    }
}