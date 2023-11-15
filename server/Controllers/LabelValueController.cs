using server.Models;
using server.DB;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace server.Controllers
{
    [ApiController]
    [Route("api")]
    public class LabelValueController : ControllerBase
    {
        private readonly Service _server;

        public LabelValueController(Service server)
        {
            _server = server;
        }

        public class LabelValue
        {
            public int value { get; set; }
            public string label { get; set; }
        }

        private async Task<IActionResult> GetAllItem(string sql, params MySqlParameter[]? parameters)
        {
            var items = new List<LabelValue>();
            using (var reader = await _server.Select(sql, parameters))
            {
                while (reader.Read())
                {
                    var item = new LabelValue
                    {
                        value = reader.GetInt32("value"),
                        label = reader.GetString("label"),
                    };
                    items.Add(item);
                }
            }

            if (items.Count > 0)
            {
                return Ok(items);
            }
            return NotFound();
        }


        [HttpGet("item/label/value")]
        public Task<IActionResult> GetLabelValue()
        {
            return GetAllItem(@"SELECT 
                                    id as value,
                                    name as label
                                FROM
                                    item 
                                ORDER BY
                                    name ASC");
        }



    }
}