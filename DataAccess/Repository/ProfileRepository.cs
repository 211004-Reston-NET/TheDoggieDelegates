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
            if (profiles.Count() == 0)
            {
                throw new IndexOutOfRangeException("None found");
            }
            return profiles;
        }

        public IEnumerable<Profile> SearchByPhoneNumber(string query)
        {
            var profile = base.GetAll().Where(p => p.ProfileHomephone.Contains(query));
            if (profile.Count() == 0)
            {
                throw new IndexOutOfRangeException("not found");
            }
            return profile;
        }

        public IEnumerable<Profile> SearchByProfileName(string query)
        {
            var profiles = base.GetAll().Where(p => p.ProfileName.Contains(query));
            if (profiles.Count() == 0)
            {
                throw new IndexOutOfRangeException("not found");
            }
            return profiles;
        }
    }
}