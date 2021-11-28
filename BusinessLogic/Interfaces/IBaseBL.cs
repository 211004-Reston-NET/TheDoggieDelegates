using System.Collections.Generic;

namespace BusinessLogic
{
    public interface IBaseBL<TEntity> where TEntity : class
    {
        TEntity Create(TEntity entity);
        IEnumerable<TEntity> GetAll();
        TEntity GetByPrimaryKey(int id);
        TEntity Update(TEntity entity);
        void Delete(TEntity entity);
        void Save();
    }
}