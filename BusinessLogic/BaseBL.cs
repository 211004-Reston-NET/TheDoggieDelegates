using System;
using System.Collections.Generic;
using DataAccess;

namespace BusinessLogic
{
    public class BaseBL<TEntity> : IBaseBL<TEntity> where TEntity : class
    {
        public readonly IRepository<TEntity> repository;
        public BaseBL(IRepository<TEntity> context)
        {
            repository = context;
        }

        public TEntity Create(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> GetAll()
        {
            throw new NotImplementedException();
        }

        public TEntity GetByPrimaryKey(int id)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public TEntity Update(TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
