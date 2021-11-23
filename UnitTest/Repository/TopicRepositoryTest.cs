using System;
using Microsoft.EntityFrameworkCore;
using Xunit;
using Models;
using DataAccess;
using System.Linq;

namespace UnitTest
{
    public class TopicRepositoryTest
    {
        readonly DbContextOptions<PawpersDbContext> _options;
        public TopicRepositoryTest()
        {
            _options = new DbContextOptionsBuilder<PawpersDbContext>()
                .UseSqlite("Filename = TopicRepository.db; Foreign Keys=False").Options;
            Seed();
        }

        [Fact]
        public void GetByIdWithNavShouldPopulateNavProps()
        {
            using (var context = new PawpersDbContext(_options))
            {
                ITopicRepository repository = new TopicRepository(context);
                var Topic = repository.GetByPrimaryKey(1);

                Assert.NotNull(Topic.Profile);
            }
        }

        [Fact]
        public void SearchByBodyShouldReturnResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                ITopicRepository repository = new TopicRepository(context);
                var topic = repository.SearchByBody("test");

                Assert.NotEmpty(topic);
            }
        }

        [Fact]
        public void SearchByBodyShouldThrowNullExceptionOnNoResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                ITopicRepository repository = new TopicRepository(context);

                Assert.Throws<IndexOutOfRangeException>(() => repository.SearchByBody("lajkdfhlajksfhlajksfhalskjfhlakfjh"));
            }
        }

        [Fact]
        public void ListByCategoryIdShouldReturnResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                ITopicRepository repository = new TopicRepository(context);
                var topic = repository.ListByCategoryId(1);

                Assert.NotEmpty(topic);
            }
        }

        [Fact]
        public void ListByCategoryIdShouldThrowNullExceptionOnNoResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                ITopicRepository repository = new TopicRepository(context);

                Assert.Throws<IndexOutOfRangeException>(() => repository.ListByCategoryId(1));
            }
        }

        [Fact]
        public void SearchByProfileIdShouldReturnResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                ITopicRepository repository = new TopicRepository(context);
                var topic = repository.SearchByProfileId(1);

                Assert.NotEmpty(topic);
            }
        }

        [Fact]
        public void SearchByProfileIdShouldThrowNullExceptionOnNoResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                ITopicRepository repository = new TopicRepository(context);

                Assert.Throws<IndexOutOfRangeException>(() => repository.SearchByProfileId(1));
            }
        }

        void Seed()
        {
            using (var context = new PawpersDbContext(_options))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                context.Profiles.Add(
                    new Profile
                    {
                        ProfileId = 1,
                        ProfileName = "lkjh",
                        ProfileStreetaddress = "123",
                        ProfileCity = "jkahfjh",
                        ProfileState = "kj",
                        ProfileZipcode = "00000",
                        ProfileAge = 11,
                        ProfileHomephone = "111-456-7890",
                        ProfilePersonalphone = "111-234-1234",
                        ProfileEmail = "aaa@aaa.com",
                        ProfileChildren = 3,
                        ProfileHasyard = 0,
                        ProfileFamilyallergies = 0,
                        ProfileResponsiblefordog = "joe",
                        ProfileAdoptionreason = "ajklsdhf",
                        ProfileDogsleepat = "lakjhf",
                        ProfileDogaggresive = "kjahf",
                        ProfileMedfordog = "lkjahlfjh",
                        ProfileNocaredog = "kljahfkj"
                    }
                );

                context.Topics.AddRange(
                    new Topic
                    {
                        TopicName = "test",
                        TopicBody = "test",
                        ProfileId = 1,
                        PostTimestamp = DateTime.Now,
                        CategoryId = 1
                    },
                    new Topic
                    {
                        TopicName = "test",
                        TopicBody = "test",
                        ProfileId = 1,
                        PostTimestamp = DateTime.Now,
                        CategoryId = 1
                    }
                );

                context.SaveChanges();
            }
        }

    }
}