using System.Collections.Generic;
using BusinessLogic;
using DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Models;
using Moq;
using WebApi.Controllers;
using Xunit;

namespace UnitTest
{
    public class FavoriteControllerTest
    {
        [Fact]
        public void SearchByDogIdReturnsOk()
        {
            var repository = new Mock<IFavoriteRepository>();
            var favoriteBL = new FavoriteBL(repository.Object);
            var controller = new FavoriteController(favoriteBL);

            var result = controller.SearchByDogId(1);
            var okResponse = (IStatusCodeActionResult)result;
            Assert.Equal(200, okResponse.StatusCode);
        }

        [Fact]
        public void SearchByProfileIdReturnsOk()
        {
            var repository = new Mock<IFavoriteRepository>();
            var favoriteBL = new FavoriteBL(repository.Object);
            var controller = new FavoriteController(favoriteBL);

            var result = controller.SearchByProfileId(1);
            var okResponse = (IStatusCodeActionResult)result;
            Assert.Equal(200, okResponse.StatusCode);
        }

        [Fact]
        public void AddReturnsOk()
        {
            var repository = new Mock<IFavoriteRepository>();
            var favoriteBL = new FavoriteBL(repository.Object);
            var controller = new FavoriteController(favoriteBL);

            var favorite = new Favorite
            {
                DogId = 1,
                ProfileId = 1,
                FavId = 1,
                IsAvailable = 1
            };

            var result = controller.AddFavorite(favorite);
            var okResponse = (IStatusCodeActionResult)result;
            Assert.Equal(201, okResponse.StatusCode);
        }
    }
}