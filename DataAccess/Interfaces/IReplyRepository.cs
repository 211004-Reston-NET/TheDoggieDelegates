using System.Collections.Generic;
using Models;

namespace DataAccess
{
    public interface IReplyRepository : IRepository<Reply>
    {
        IEnumerable<Reply> GetAllByProfileId(int query);
    }
}