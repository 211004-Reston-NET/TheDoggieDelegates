using BusinessLogic;
using Serilog;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
            private readonly IFavoriteBL Favoriterepository;
        public FavoriteController(IFavoriteBL context)
        {
            Favoriterepository = context;
            
        }
       

        [HttpGet("SearchByDog/{id}")]
        public IActionResult SearchByDogId(int id)
        {
           
                 return Ok(Favoriterepository.SearchByDogId(id));
            
         
            
        }

        [HttpGet("SearchByProfileId/{id}")]
        public IActionResult SearchByProfileId(int p_id)
        {
            return Ok(Favoriterepository.SearchByProfileId(p_id));
        }

        [HttpGet("SearchByIdWithNav/{id}")]
        public IActionResult SearchByIDwithNav(int nav_id)
        {
            return Ok(Favoriterepository.GetByIdWithNav(nav_id));
        }

      

        // POST <FavoriteController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT <FavoriteController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE <FavoriteController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
