using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        readonly pawpersdbContext _context;
        public Repository(pawpersdbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Sets model TEntity, creates new entity in memory
        /// </summary>
        /// <param name="entity">Model entity</param>
        public void Create(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
        }

        /// <summary>
        /// Sets model TEntity, returns all db entries in table
        /// </summary>
        /// <returns>IEnumerable<TEntity></returns>
        public IEnumerable<TEntity> GetAll()
        {
            var query = _context.Set<TEntity>().AsQueryable();
            var navigations = _context.Model.FindEntityType(typeof(TEntity))
                .GetDerivedTypesInclusive()
                .SelectMany(type => type.GetNavigations())
                .Distinct();

            foreach (var item in navigations)
            {
                query = query.Include(item.Name);
            }

            return query.ToList();
        }

        /// <summary>
        /// Sets model TEntity, returns exact match from db
        /// </summary>
        /// <param name="query">Table primary key (int)</param>
        /// <returns>TEntity[id]</returns>
        public TEntity GetByPrimaryKey(int query)
        {
            return _context.Set<TEntity>().Find(query);
        }

        /// <summary>
        /// Sets model TEntity, updates entity in memory
        /// </summary>
        /// <param name="entity">Model</param>
        public void Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
        }

        /// <summary>
        /// Sets model TEntity, deletes model from memory
        /// </summary>
        /// <param name="entity">Model</param>
        public void Delete(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
        }

        /// <summary>
        /// Saves changes to db
        /// </summary>
        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
