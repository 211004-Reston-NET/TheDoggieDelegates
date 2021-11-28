using System.Collections.Generic;

namespace DataAccess
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Create(TEntity entity);
        void Delete(TEntity entity);
        IEnumerable<TEntity> GetAll();
        TEntity GetByPrimaryKey(int query);
        void Save();
        TEntity Update(TEntity entity);
    }
}