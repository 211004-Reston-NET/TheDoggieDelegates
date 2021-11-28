using DataAccess;
using Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;


namespace BusinessLogic
{

    public class ProfileBL : BaseBL<Profile>, IProfileBL
    {
        protected readonly IProfileRepository profileRepository;

        public ProfileBL(IProfileRepository profileRepository) : base(profileRepository)
        {
            this.profileRepository = profileRepository;
        }

        public Profile GetByIdWithNav(int query)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Profile> SearchByEmail(string query)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Profile> SearchByPhoneNumber(string query)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Profile> SearchByProfileName(string query)
        {
            throw new NotImplementedException();
        }
    }
}