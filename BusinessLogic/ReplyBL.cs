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

        public Reply Create()
        {
            throw new NotImplementedException();
        }

        public Reply Delete()
        {
            throw new NotImplementedException();
        }

        public Reply Update()
        {
            throw new NotImplementedException();
        }
    }
}