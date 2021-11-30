using BusinessLogic;
using Microsoft.AspNetCore.Mvc;
using Models;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TopicController : ControllerBase
    {
        private readonly ITopicBL TopicRepository;

        public TopicController(ITopicBL context)
        {
            TopicRepository = context;
        }
        // GET: <TopicController>
      

        [HttpGet("SearchByBody/{query}")]
        public IActionResult SearchByBody(string query)
        {
            try
            {
                return Ok(TopicRepository.SearchByBody(query));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid search field");
            }
         }

        [HttpGet("ListByCategory/{id}")]
        public IActionResult ListByCategoryId(int id)
        {
            try
            {
                return Ok(TopicRepository.ListByCategoryId(id));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid ID");
            }

         }


         [HttpGet("SearchByIdWithNav/{id}")]
        public IActionResult SearchByIdWithNav(int id)
        {

            try
           {
                return Ok(TopicRepository.GetByIdWithNav(id));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid Id");
            }
            
        }

        [HttpGet("SearchByName/{query}")]
        public IActionResult SearchByName(string query)
        {
            try
            {
                return Ok(TopicRepository.SearchByName(query));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid search field");
            }
        }
        [HttpGet("SearchByProfileId/{id}")]
        public IActionResult SearchByProfileId(int id)
        {
            try
            {
                return Ok(TopicRepository.SearchByProfileId(id));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid search id");
            }
        }


        

        // POST <TopicController>
        [HttpPost]
        public IActionResult AddTopic([FromBody] Topic p_topic)
        {
            TopicRepository.Create(p_topic);
            TopicRepository.Save();
            return Created("Topic/Add", p_topic);
        }

        // PUT <TopicController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Topic p_topic)
        {

            var topic = TopicRepository.GetByPrimaryKey(id);
            try
            {
                topic.TopicBody = p_topic.TopicBody;
                topic.TopicId = p_topic.TopicId;
                topic.PostTimestamp = p_topic.PostTimestamp;
                topic.TopicName = p_topic.TopicName;
                topic.ProfileId = p_topic.ProfileId;
                topic.CategoryId = p_topic.CategoryId;

                TopicRepository.Update(topic);
                TopicRepository.Save();

                return Ok();

            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid Id");

            }
        }

        // DELETE <TopicController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var topic = TopicRepository.GetByPrimaryKey(id);
                TopicRepository.Delete(topic);
                TopicRepository.Save();
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
