using server.Models;
using server.DB;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api/stock")]
    public class StockController : ControllerBase
    {
        private readonly MysqlDb _server;

        public StockController(MysqlDb server)
        {
            _server = server;
        }

        private async Task<IActionResult> GetAllItem(string sql, params MySqlParameter[]? parameters)
        {
            var items = new List<Stock>();
            using (var reader = await _server.Select(sql, parameters))
            {
                while (reader.Read())
                {
                    var item = new Stock
                    {
                        Id = reader.GetInt32("id"),
                        Name = reader.GetString("name"),
                        Quantity = reader.GetInt32("quantity"),
                        Description = reader.GetString("description")
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

        [HttpGet]
        public Task<IActionResult> Get()
        {
            return GetAllItem("SELECT * FROM item");
        }

        [HttpGet("{id}")]
        public Task<IActionResult> Get(int id)
        {
            return GetAllItem($@"SELECT * FROM item WHERE id = @id", new MySqlParameter("@id", id));
        }

        [HttpPost]
        public async Task<IActionResult> Post(Stock item)
        {
            var res = await _server.Insert($@"INSERT INTO item (
                                name, 
                                description)
                              VALUES (
                                @name,
                                @description)",
                                new MySqlParameter("@name", item.Name),
                                new MySqlParameter("@description", item.Description));

            return Ok(res);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Stock item)
        {
            var res = await _server.Update($@"UPDATE item SET 
                                name = @name,
                                description = @description
                                WHERE id = @id",
                                new MySqlParameter("@name", item.Name),
                                new MySqlParameter("@description", item.Description),
                                new MySqlParameter("@id", id));
            return Ok(res);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var res = await _server.Delete($@"DELETE FROM item WHERE id = @id", new MySqlParameter("@id", id));
            return Ok(res);
        }
    }
}