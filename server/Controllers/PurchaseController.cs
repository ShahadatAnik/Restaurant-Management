using server.Models;
using server.DB;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace server.Controllers
{
    [ApiController]
    [Route("api/purchase")]
    public class PurchaseController : ControllerBase
    {
        private readonly Service _server;

        public PurchaseController(Service server)
        {
            _server = server;
        }

        private async Task<IActionResult> GetAllItem(string sql, params MySqlParameter[]? parameters)
        {
            var items = new List<Purchase>();
            using (var reader = await _server.Select(sql, parameters))
            {
                while (reader.Read())
                {
                    var item = new Purchase
                    {
                        Id = reader.GetInt32("id"),
                        ItemId = reader.GetInt32("item_id"),
                        ItemName = reader.GetString("item_name"),
                        Price = reader.GetDecimal("price"),
                        Quantity = reader.GetInt32("quantity"),
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
            return GetAllItem(@"SELECT 
                                    p.id as id,
                                    i.id as item_id,
                                    i.name as item_name,
                                    p.price as price,
                                    p.quantity as quantity,
                                    p.date as date
                                FROM 
                                    purchase p
                                    INNER JOIN
                                    item i
                                    ON p.item_id = i.id");
        }

        [HttpGet("{id}")]
        public Task<IActionResult> Get(int id)
        {
            return GetAllItem($@"SELECT 
                                    p.id as id,
                                    i.id as item_id,
                                    i.name as item_name,
                                    p.price as price,
                                    p.quantity as quantity,
                                    p.date as date
                                FROM 
                                    purchase p
                                    INNER JOIN
                                    item i
                                    ON p.item_id = i.id
                                WHERE
                                    p.id = @id", new MySqlParameter("@id", id));
        }

        

        [HttpPost]
        public async Task<IActionResult> Post(Purchase item)
        {
            var res = await _server.Insert(@"INSERT INTO purchase (
                                item_id,
                                price,
                                quantity
                                ) VALUES (
                                @item_id,
                                @price,
                                @quantity
                                )",
                                new MySqlParameter("@item_id", item.ItemId),
                                new MySqlParameter("@price", item.Price),
                                new MySqlParameter("@quantity", item.Quantity));
            return Ok(res);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Purchase item)
        {
            var res = await _server.Update($@"UPDATE purchase SET 
                                    price = @price,
                                    quantity = @quantity
                                    WHERE id = @id",
                                    new MySqlParameter("@price", item.Price),
                                    new MySqlParameter("@quantity", item.Quantity),
                                    new MySqlParameter("@id", id));
            return Ok(res);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var res = await _server.Delete($@"DELETE FROM purchase WHERE id = @id", new MySqlParameter("@id", id));
            return Ok(res);
        }
    }
}