using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace server.DB
{
    public class Service : IDisposable
    {
        private readonly string sqlString = "server=localhost;user=root;database=restaurant_db;port=3306;password=";
        private MySqlConnection conn;
        private MySqlCommand command;

        // i want to make pair where the key is the type of the operation and the value is the message
        private readonly List<KeyValuePair<string, string>> messages = new()
        {
            new("create", "Create successful"),
            new("update", "Update successful"),
            new("delete", "Delete successful"),
        };


        public Service()
        {
            conn = new MySqlConnection(sqlString);
        }

        public class OperationResult
        {
            public string type { get; set; }
            public string message { get; set; }
        }


        private async Task OpenAsync()
        {
            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();
        }

        private async Task CloseAsync()
        {
            if (conn.State != ConnectionState.Closed)
                await conn.CloseAsync();
        }

        public MySqlCommand GetCommand(string sql, params MySqlParameter[] parameters)
        {
            command = new MySqlCommand(sql, conn);
            if (parameters != null)
            {
                foreach (var parameter in parameters)
                {
                    command.Parameters.Add(parameter);
                }
            }
            return command;
        }

        public async Task<OperationResult> DefaultQuery(string sql, string type, params MySqlParameter[] parameters)
        {
            await OpenAsync();
            command = GetCommand(sql, parameters);
            try
            {
                await command.ExecuteNonQueryAsync();
                await CloseAsync();
                return new OperationResult { type = type, message = messages.Find(x => x.Key == type).Value };
            }
            catch (MySqlException e)
            {
                await CloseAsync();
                return new OperationResult { type = "error", message = e.Message };
            }
        }


        public async Task<MySqlDataReader> Select(string sql, params MySqlParameter[] parameters)
        {
            await OpenAsync();
            command = GetCommand(sql, parameters);
            return await command.ExecuteReaderAsync(CommandBehavior.CloseConnection);
        }

        public async Task<IActionResult> Insert(string sql, params MySqlParameter[] parameters)
        {
            var result = await DefaultQuery(type: "create", sql: sql, parameters: parameters);
            if (result.type == "create")
                return new OkObjectResult(result);

            return new BadRequestObjectResult(result);
        }



        public async Task<IActionResult> Update(string sql, params MySqlParameter[] parameters)
        {
            var result = await DefaultQuery(type: "update", sql: sql, parameters: parameters);
            if (result.type == "update")
                return new OkObjectResult(result);

            return new BadRequestObjectResult(result);
        }

        public async Task<IActionResult> Delete(string sql, params MySqlParameter[] parameters)
        {
            var result = await DefaultQuery(type: "delete", sql: sql, parameters: parameters);
            if (result.type == "delete")
                return new OkObjectResult(result);

            return new BadRequestObjectResult(result);
        }

        public void Dispose()
        {
            conn.Close();
            conn.Dispose();
        }

        public async ValueTask DisposeAsync()
        {
            await conn.CloseAsync();
            await conn.DisposeAsync();
        }
    }
}