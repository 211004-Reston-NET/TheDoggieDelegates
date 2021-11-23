using System.Collections.Generic;
using Models;

namespace DataAccess
{
    public interface IProfileRepository : IRepository<Profile>
    {
        Profile GetByIdWithNav(int query);
        IEnumerable<Profile> SearchByProfileName(string query);
        Profile SearchByPhoneNumber(string query);
        Profile SearchByEmail(string query);
    }
}