using System.Collections.Generic;
using System.Linq;
using System;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DataAccess
{
    public class ProfileRepository : Repository<Profile>, IProfileRepository
    {
        readonly PawpersDbContext repository;
        public ProfileRepository(PawpersDbContext context) : base(context)
        {
            repository = context;
        }

        /// <summary>
        /// Queries DB to find single item based on the primary key 
        /// loads nav properties of the entity
        /// </summary>
        /// <param name="query">int </param>
        /// <returns>query which will be favorite ID</returns>

        public Profile GetByIdWithNav(int query)
        {
            var profile = repository.Profiles
                .Include(p => p.ProfileDwelling)
                .Include(p => p.Favorites)
                .Include(p => p.Replies)
                .Include(p => p.Topics)
                .Single(p => p.ProfileId.Equals(query));

            return profile;
        }

        public IEnumerable<Profile> SearchByEmail(string query)
        {
            var profiles = base.GetAll().Where(p => p.ProfileEmail.ToLower().Contains(query.ToLower()));
            if (!profiles.Any())
            {
                throw new KeyNotFoundException("None found");
            }
            return profiles;
        }

        public IEnumerable<Profile> SearchByPhoneNumber(string query)
        {
            var profiles = base.GetAll().Where(p => p.ProfileHomephone.Contains(query));
            if (!profiles.Any())
            {
                throw new KeyNotFoundException("not found");
            }
            return profiles;
        }

        public IEnumerable<Profile> SearchByProfileName(string query)
        {
            var profiles = base.GetAll().Where(p => p.ProfileName.Contains(query));
            if (!profiles.Any())
            {
                throw new KeyNotFoundException("not found");
            }
            return profiles;
        }
    }
}