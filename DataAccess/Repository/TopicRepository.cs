using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;
using System;

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
            var listoftopics = GetAll().Where(b => b.TopicBody.Contains(query));
            if(listoftopics.Count() == 0)
            {
                throw new IndexOutOfRangeException("Topic not found.");
            }
            else
            {
                return listoftopics;
            }

            
                
        }

        public IEnumerable<Topic> ListByCategoryId(int query)
        {
            var listoftopics = GetAll().Where(b => b.CategoryId.Equals(query));
            if(listoftopics.Count() == 0)
            {
                throw new IndexOutOfRangeException("Topic not found.");
            }
            else
            {
                return listoftopics;
            }
        }

        public IEnumerable<Topic> SearchByName(string query)
        {
            var listoftopics = GetAll().Where(b => b.TopicName.Equals(query));
            if(listoftopics.Count() == 0)
            {
                throw new IndexOutOfRangeException("Topic not found.");
            }
            else
            {
                return listoftopics;
            }
        }

        public IEnumerable<Topic> SearchByProfileId(int query)
        {
            var listoftopics = GetAll().Where(b => b.ProfileId.Equals(query));
            if(listoftopics.Count() == 0)
            {
                throw new IndexOutOfRangeException("Topic not found.");
            }
            else
            {
                return listoftopics;
            }
        }
    }
}