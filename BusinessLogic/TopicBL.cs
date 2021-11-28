using DataAccess;
using Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;


namespace BusinessLogic
{

    public class TopicBL : BaseBL<Topic>, ITopicBL
    {
        protected readonly ITopicRepository topicRepository;

        public TopicBL(ITopicRepository topicRepository) : base(topicRepository)
        {
            this.topicRepository = topicRepository;
        }

        public Topic GetByIdWithNav(int query)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Topic> ListByCategoryId(int query)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Topic> SearchByBody(string query)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Topic> SearchByName(string query)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Topic> SearchByProfileId(int query)
        {
            throw new NotImplementedException();
        }
    }
}