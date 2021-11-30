using Microsoft.AspNetCore.Mvc;
using BusinessLogic;
using Serilog;
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
    public class ProfileController : ControllerBase
    {
        private readonly IProfileBL profileRepository;

        public ProfileController(IProfileBL context)
        {
            profileRepository = context;

        }


        [HttpGet("GetAll")]
        public IActionResult GetAllProfile()
        {
            return Ok(profileRepository.GetAll());
        }

        [HttpGet("Get/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(profileRepository.GetByPrimaryKey(id));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid ID");
            }
        }

        [HttpGet("GetWithNav/{id}")]
        public IActionResult GetWithNav(int id)
        {

            try
            {
                return Ok(profileRepository.GetByIdWithNav(id));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid Id");
            }

        }



        [HttpGet("SearchByEmail/{query}")]
        public IActionResult SearchByEmail(string query)
        {
            try
            {
                return Ok(profileRepository.SearchByEmail(query));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid ID");
            }
        }

        [HttpGet("SearchByPhone/{query}")]
        public IActionResult SearchByPhone(string query)
        {
            try
            {
                return Ok(profileRepository.SearchByPhoneNumber(query));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid ID");
            }
        }

        [HttpGet("SearchByName/{query}")]
        public IActionResult SearchByName(string query)
        {
            try
            {
                return Ok(profileRepository.SearchByProfileName(query));
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
                return BadRequest("Not a valid ID");
            }
        }

        // POST <ProfileController>
        [HttpPost("Add")]
        public IActionResult AddProfile([FromBody] Profile p_profile)
        {
            profileRepository.Create(p_profile);
            profileRepository.Save();
            return Created("Profile/Add", p_profile);
        }

        // PUT <ProfileController>/5
        [HttpPut("Edit/{id}")]
        public IActionResult Put(int id, [FromBody] Profile p_profile)
        {
            var pro = profileRepository.GetByPrimaryKey(id);
            if (pro != null)

            {
                pro.ProfileId = p_profile.ProfileId;
                pro.ProfileName = p_profile.ProfileName;
                pro.ProfileStreetaddress = p_profile.ProfileStreetaddress;
                pro.ProfileCity = p_profile.ProfileCity;
                pro.ProfileStateid = p_profile.ProfileStateid;
                pro.ProfileZipcode = p_profile.ProfileZipcode;
                pro.ProfileAge = p_profile.ProfileAge;
                pro.ProfileHomephone = p_profile.ProfileHomephone;
                pro.ProfilePersonalphone = p_profile.ProfilePersonalphone;
                pro.ProfileEmail = p_profile.ProfileEmail;
                pro.ProfileOccupation = p_profile.ProfileOccupation;
                pro.ProfileSpousename = p_profile.ProfileSpousename;
                pro.ProfileChildren = p_profile.ProfileChildren;
                pro.ProfileDwellingid = p_profile.ProfileDwellingid;
                pro.ProfileHasyard = p_profile.ProfileHasyard;
                pro.ProfileLandlordname = p_profile.ProfileLandlordname;
                pro.ProfileLandlordphone = p_profile.ProfileLandlordphone;
                pro.ProfileOtherpetname = p_profile.ProfileOtherpetname;
                pro.ProfileOtherpetbreed = p_profile.ProfileOtherpetbreed;
                pro.ProfileOtherpetsex = p_profile.ProfileOtherpetsex;
                pro.ProfileOtherpetage = p_profile.ProfileOtherpetage;
                pro.ProfileFamilyallergies = p_profile.ProfileFamilyallergies;
                pro.ProfileResponsiblefordog = p_profile.ProfileResponsiblefordog;
                pro.ProfileAdoptionreason = p_profile.ProfileAdoptionreason;
                pro.ProfileDogsleepat = p_profile.ProfileDogsleepat;
                pro.ProfileDogaggresive = p_profile.ProfileDogaggresive;
                pro.ProfileMedfordog = p_profile.ProfileMedfordog;
                pro.ProfileNocaredog = p_profile.ProfileNocaredog;


                profileRepository.Update(pro);
                profileRepository.Save();
            }
            else
            {
                return NotFound();
            }
            return Ok();
        }

        // DELETE <ProfileController>/5
        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var profile = profileRepository.GetByPrimaryKey(id);
                profileRepository.Delete(profile);
                profileRepository.Save();
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
