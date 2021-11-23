using System.Collections.Generic;
using Models;

namespace DataAccess
{
    public class TopicRepository : Repository<Topic>, ITopicRepository
    {
        public TopicRepository(PawpersDbContext context) : base(context)
        {
        }

        public Topic GetByIdWithNav(int query)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Topic> SearchByBody(string query)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Topic> ListByCategoryId(int query)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Topic> SearchByName(string query)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Topic> SearchByProfileId(int query)
        {
            throw new System.NotImplementedException();
        }
    }
}