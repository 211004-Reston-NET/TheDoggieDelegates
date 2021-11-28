using BusinessLogic;
using Models;
using System.Collections.Generic;


namespace BusinessLogic
{
    public interface IReplyBL : IBaseBL<Reply>
    {
        Reply Create();
        Reply Update();
        Reply Delete();
    }
}