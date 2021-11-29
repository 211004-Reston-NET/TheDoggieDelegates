using DataAccess;
using Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;


namespace BusinessLogic
{

    public class ReplyBL : BaseBL<Reply>, IReplyBL
    {
        protected readonly IReplyRepository replyRepository;

        public ReplyBL(IReplyRepository replyRepository) : base(replyRepository)
        {
            this.replyRepository = replyRepository;
        }

        public IEnumerable<Reply> SearchByProfileId(int query)
        {
            throw new NotImplementedException();
        }
    }
}