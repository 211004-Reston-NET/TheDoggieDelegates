using BusinessLogic;
using Serilog;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
            private readonly IFavoriteBL FavoriteRepository;
        public FavoriteController(IFavoriteBL context)
        {
            FavoriteRepository = context;
            
        }
       

        [HttpGet("SearchByDog/{id}")]
        public IActionResult SearchByDogId(int id)
        {
            try
            {
                    return Ok(FavoriteRepository.SearchByDogId(id));
            }
            catch(Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid ID");
            }
                 

            
            
         
            
        }

        [HttpGet("SearchByProfileId/{id}")]
        public IActionResult SearchByProfileId(int id)
        {

            try
            {
                return Ok(FavoriteRepository.SearchByProfileId(id));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid Id");
                
            }
            
        }

        [HttpGet("SearchByIdWithNav/{id}")]
        public IActionResult SearchByIDwithNav(int id)
        {

            try
            {
                return Ok(FavoriteRepository.GetByIdWithNav(id));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid Id");
            }
            
        }

      

        // POST <FavoriteController>
        [HttpPost("Add")]
        public IActionResult AddFavorite([FromBody] Favorite p_favorite)
        {
            FavoriteRepository.Create(p_favorite);
            FavoriteRepository.Save();
            return Created("Favorite/Add", p_favorite);
        }

        // PUT <FavoriteController>/5
        [HttpPut("EditFavorite/{id}")]
        public IActionResult Put(int id, [FromBody] Favorite p_favorite)
        {
            var fav = FavoriteRepository.GetByPrimaryKey(id);
            if (fav != null)

            {
                fav.DogId = p_favorite.DogId;
                fav.ProfileId = p_favorite.ProfileId;
                fav.IsAvailable = p_favorite.IsAvailable;

                FavoriteRepository.Update(fav);
                FavoriteRepository.Save();
            }
            else
            {
                return NotFound();
            }
            return Ok();
        }

        // DELETE <FavoriteController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
               var favorite = FavoriteRepository.GetByPrimaryKey(id);
                FavoriteRepository.Delete(favorite);
                FavoriteRepository.Save();
                return Ok();
            }
            catch (Exception e)
            {

                Log.Error(e.Message);
                return BadRequest("Not a valid Id");
            }
        }
    }
}
