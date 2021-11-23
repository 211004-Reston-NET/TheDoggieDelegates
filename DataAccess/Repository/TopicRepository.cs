using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DataAccess
{
    public class TopicRepository : Repository<Topic>, ITopicRepository
    {
        readonly PawpersDbContext repository;
        public TopicRepository(PawpersDbContext context) : base(context)
        {
            repository = context;
        }

        public Topic GetByIdWithNav(int query)
        {
            var topic = repository.Topics
                .Include(t => t.Category)
                .Include(t => t.Profile)
                .Include(t => t.Replies)
                .Single(t => t.TopicId.Equals(query));

            return topic;
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