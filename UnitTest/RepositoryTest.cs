using System;
using Microsoft.EntityFrameworkCore;
using Xunit;
using Models;
using DataAccess;
using System.Linq;

namespace UnitTest
{
    public class RepositoryTest
    {
        readonly DbContextOptions<pawpersdbContext> _options;
        public RepositoryTest()
        {
            _options = new DbContextOptionsBuilder<pawpersdbContext>()
                .UseSqlite("Filename = Repository.db").Options;
            Seed();
        }

        [Fact]
        public void CreateTopicShouldCreateTopic()
        {
            using (var context = new pawpersdbContext(_options))
            {
                IRepository<Topic> repository = new Repository<Topic>(context);
                Topic newTopic = new ()
                {
                    TopicName = "Test 3",
                    TopicBody = "Testing",
                    PostTimestamp = DateTime.Now
                };
                repository.Create(newTopic);
                repository.Save();

                Assert.Equal(newTopic.TopicName, repository.GetByPrimaryKey(3).TopicName);
            }
        }

        [Fact]
        public void GetAllTopicsShouldReturnAllTopics()
        {
            using (var context = new pawpersdbContext(_options))
            {
                IRepository<Topic> repository = new Repository<Topic>(context);

                var testList = repository.GetAll();

                Assert.Equal(2, testList.Count());
            }
        }

        [Fact]
        public void GetTopicByPrimaryKeyShouldReturnTopic()
        {
            using (var context = new pawpersdbContext(_options))
            {
                IRepository<Topic> repository = new Repository<Topic>(context);

                Assert.Equal("test topic 1", repository.GetByPrimaryKey(1).TopicName);
            }
        }

        [Fact]
        public void UpdateTopicshouldUpdateTopic()
        {
            using (var context = new pawpersdbContext(_options))
            {
                IRepository<Topic> repository = new Repository<Topic>(context);
                var testTopic = repository.GetByPrimaryKey(1);
                testTopic.TopicName = "Test Topic 1";
                repository.Update(testTopic);
                repository.Save();

                Assert.Equal("Test Topic 1", repository.GetByPrimaryKey(1).TopicName);
            }
        }

        [Fact]
        public void DeleteTopicshouldDeleteTopic()
        {
            using (var context = new pawpersdbContext(_options))
            {
                IRepository<Topic> repository = new Repository<Topic>(context);
                var testTopic = repository.GetByPrimaryKey(2);
                repository.Delete(testTopic);
                repository.Save();
                
                Assert.Equal(1, repository.GetAll().Count());
            }
        }

        void Seed()
        {
            using (var context = new pawpersdbContext(_options))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                context.Categories.Add(
                    new Category
                    {
                        CategoryName = "Things"
                    }
                );

                context.Topics.AddRange(
                    new Topic
                    {
                        TopicName = "test topic 1",
                        TopicBody = "Testing",
                        PostTimestamp = DateTime.Now,
                    },
                    new Topic
                    {
                        TopicName = "test topic 2",
                        TopicBody = "Testing",
                        PostTimestamp = DateTime.Now,
                    }
                );

                context.SaveChanges();
            }
        }
    }
}
