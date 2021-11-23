using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Models;
using Xunit;

namespace UnitTest
{
    public class FavoritesValidation
    {
        [Fact]
        public void DogIdRequired()
        {
            var favorite = new Favorite
            {
                DogId = null,
                IsAvailable = 1,
                ProfileId = 1
            };

            var validationResults = new List<ValidationResult>();
            var ctx = new ValidationContext(favorite, null, null);
            Assert.False(Validator.TryValidateObject(favorite, ctx, validationResults, true));
        }

        [Fact]
        public void IsAvailableRequired()
        {
            var favorite = new Favorite
            {
                DogId = 1,
                IsAvailable = null,
                ProfileId = 1
            };

            var validationResults = new List<ValidationResult>();
            var ctx = new ValidationContext(favorite, null, null);
            Assert.False(Validator.TryValidateObject(favorite, ctx, validationResults, true));
        }

        [Fact]
        public void ProfileIdRequired()
        {
            var favorite = new Favorite
            {
                DogId = 1,
                IsAvailable = 1,
                ProfileId = null
            };

            var validationResults = new List<ValidationResult>();
            var ctx = new ValidationContext(favorite, null, null);
            Assert.False(Validator.TryValidateObject(favorite, ctx, validationResults, true));
        }
    }
}
