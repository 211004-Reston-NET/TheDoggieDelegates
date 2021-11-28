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

        public void Create(TEntity entity)
        {
            repository.Create(entity);
        }

        public void Delete(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return repository.GetAll();
        }

        public TEntity GetByPrimaryKey(int id)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            repository.Save();
        }

        public void Update(TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
