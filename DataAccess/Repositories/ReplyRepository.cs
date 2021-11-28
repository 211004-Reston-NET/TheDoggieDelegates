using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;
using System;

namespace DataAccess
{
    public class ReplyRepository : Repository<Reply>, IReplyRepository
    {
        readonly PawpersDbContext repository;
        public ReplyRepository(PawpersDbContext context) : base(context)
        {
            repository = context;
        }

        public IEnumerable<Reply> GetAllByProfileId(int query)
        {
            throw new NotImplementedException();
        }
    }
}