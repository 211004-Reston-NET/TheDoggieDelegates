using System.Collections.Generic;
using Models;

namespace DataAccess
{
    public class ProfileRepository : Repository<Profile>, IProfileRepository
    {
        public ProfileRepository(PawpersDbContext context) : base(context)
        {
        }

        public Profile GetByIdWithNav(int query)
        {
            throw new System.NotImplementedException();
        }

        public Profile SearchByEmail(string query)
        {
            throw new System.NotImplementedException();
        }

        public Profile SearchByPhoneNumber(string query)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Profile> SearchByProfileName(string query)
        {
            throw new System.NotImplementedException();
        }
    }
}