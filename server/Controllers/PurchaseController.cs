using server.Models;
using server.DB;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api/purchase")]
    public class PurchaseController : ControllerBase
    {
        private readonly MysqlDb _server;

        public PurchaseController(MysqlDb server)
        {
            _server = server;
        }

        private async Task<IActionResult> GetAllItem(string sql)
        {
            var items = new List<Purchase>();
            using (var reader = await _server.Select(sql))
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
                        Date = reader.GetDateTime("date")
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
                                    p.id = {id}");
        }

        [HttpPost]
        public async Task<IActionResult> Post(Purchase item)
        {
            var res = await _server.Insert($@"INSERT INTO purchase (
                                item_id,
                                price,
                                quantity
                                ) VALUES (
                                {item.ItemId},
                                {item.Price},
                                {item.Quantity})");
            if (res > -1)
            {
                item.Id = (int)res;
                return Ok(new { type = "create", message = "Insert successful", data = item });
            }
            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Purchase item)
        {
            var res = await _server.Update($@"UPDATE purchase SET 
                                    price = {item.Price},
                                    quantity = {item.Quantity}
                                    WHERE id = {id} ");
            if (res > -1)
            {
                return Ok(new { type = "update", message = "Update successful" });
            }
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _server.Delete($@"DELETE FROM purchase WHERE id = {id}");
            return Ok(new { type = "delete", message = "Delete successful" });
        }
    }
}