using server.Models;
using server.DB;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api/stock")]
    public class StockController : ControllerBase
    {
        private readonly Service _server;

        public StockController(Service server)
        {
            _server = server;
        }

        private static MySqlParameter CreateParameter(string name, object value) => new MySqlParameter(name, value);

        private async Task<IActionResult> GetAllItem(string sql, params MySqlParameter[] parameters)
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
                        Description = reader.GetString("description"),
                    };
                    items.Add(item);
                }
            }

            return items.Count > 0 ? Ok(items) : NotFound();
        }

        [HttpGet]
        public Task<IActionResult> Get() => GetAllItem("SELECT * FROM stock;");

        [HttpGet("{id}")]
        public Task<IActionResult> Get(int id) => GetAllItem("SELECT * FROM stock WHERE id = @id;", CreateParameter("@id", id));

        [HttpPost]
        public async Task<IActionResult> Post(Stock item)
        {
            var res = await _server.Insert(@"INSERT INTO stock (name, description) VALUES (@name, @description);",
                                            CreateParameter("@name", item.Name),
                                            CreateParameter("@description", item.Description));
            return Ok(res);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Stock item)
        {
            var res = await _server.Update(@"UPDATE stock SET name = @name, description = @description WHERE id = @id;",
                                            CreateParameter("@name", item.Name),
                                            CreateParameter("@description", item.Description),
                                            CreateParameter("@id", id));
            return Ok(res);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var res = await _server.Delete("DELETE FROM stock WHERE id = @id;", CreateParameter("@id", id));
            return Ok(res);
        }
    }
}