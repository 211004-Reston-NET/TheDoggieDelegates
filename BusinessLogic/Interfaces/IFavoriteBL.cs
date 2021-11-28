using System.Collections.Generic;
using Models;

namespace BusinessLogic
{
    public interface IFavoriteBL : IBaseBL<Favorite>
    {
        Favorite GetByIdWithNav(int query);
        IEnumerable<Favorite> SearchByDogId(int query);
        IEnumerable<Favorite> SearchByProfileId(int query);
    }
}