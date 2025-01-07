
using Microsoft.AspNetCore.Mvc;
using MongoDB.Entities;

namespace SearchService.Controllers
{
    [ApiController]
    [Route("api/search")]
    public class SearchController : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<List<Item>>> SearchItems(string searchParam)
        {
            var query = DB.Find<Item>();

            query.Sort(x => x.Ascending(a => a.Make));

            if(!string.IsNullOrEmpty(searchParam))
            {
                query.Match(Search.Full, searchParam).SortByTextScore();
            }

            var result = await query.ExecuteAsync();

            return result;
        }


    }
}