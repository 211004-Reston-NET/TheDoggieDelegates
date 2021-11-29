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

        public IEnumerable<Reply> SearchByProfileId(int query)
        {
            var result = base.GetAll()
                        .Where(i => i.ProfileId.Equals(query));
            if (!result.Any())
            {
                throw new KeyNotFoundException("No result found");
            }

            return result;
        }
    }
}