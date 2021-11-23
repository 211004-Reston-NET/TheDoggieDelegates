using System;
using Microsoft.EntityFrameworkCore;
using Xunit;
using Models;
using DataAccess;
using System.Linq;

namespace UnitTest
{
    public class FavoriteRepositoryTest
    {
        readonly DbContextOptions<PawpersDbContext> _options;
        public FavoriteRepositoryTest()
        {
            _options = new DbContextOptionsBuilder<PawpersDbContext>()
                .UseSqlite("Filename = FavoriteRepository.db; Foreign Keys=False").Options;
            Seed();
        }

        [Fact]
        public void GetByIdWithNavShouldPopulateNavProps()
        {
            using (var context = new PawpersDbContext(_options))
            {
                IFavoriteRepository repository = new FavoriteRepository(context);
                var favorite = repository.GetByIdWithNav(1);

                Assert.NotNull(favorite.Profile);
            }
        }

        [Fact]
        public void SearchByDogIdShouldReturnResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                IFavoriteRepository repository = new FavoriteRepository(context);
                var favorite = repository.SearchByDogId(1);

                Assert.NotEmpty(favorite);
            }
        }

        [Fact]
        public void SearchByDogIdShouldThrowNullExceptionOnNoResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                IFavoriteRepository repository = new FavoriteRepository(context);

                Assert.Throws<IndexOutOfRangeException>(() => repository.SearchByDogId(3));
            }
        }

        [Fact]
        public void SearchByProfileIdShouldReturnResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                IFavoriteRepository repository = new FavoriteRepository(context);
                var favorite = repository.SearchByProfileId(1);

                Assert.NotEmpty(favorite);
            }
        }

        [Fact]
        public void SearchByProfileIdShouldThrowNullExceptionOnNoResults()
        {
            using (var context = new PawpersDbContext(_options))
            {
                IFavoriteRepository repository = new FavoriteRepository(context);

                Assert.Throws<IndexOutOfRangeException>(() => repository.SearchByProfileId(3));
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

                context.Favorites.AddRange(
                    new Favorite
                    {
                        DogId = 1,
                        IsAvailable = 1,
                        ProfileId = 1
                    },
                    new Favorite
                    {
                        DogId = 2,
                        IsAvailable = 1,
                        ProfileId = 1
                    }
                );

                context.SaveChanges();
            }
        }
    }
}