using BusinessLogic;
using Models;
using System.Collections.Generic;


namespace BusinessLogic
{
    public interface IProfileBL : IBaseBL<Profile>
    {
        Profile GetByIdWithNav(int query);
        IEnumerable<Profile> SearchByEmail(string query);
        IEnumerable<Profile> SearchByPhoneNumber(string query);
        IEnumerable<Profile> SearchByProfileName(string query);
    }
}
