using MySql.Data.MySqlClient;
using System.Data;
using System.Threading.Tasks;

namespace server.DB
{
    public class MysqlDb : IDisposable
    {
        private readonly string sqlString = "server=localhost;user=root;database=restaurant_db;port=3306;password=";
        private MySqlConnection mySqlConnection;
        private MySqlCommand mySqlCommand;

        public MysqlDb()
        {
            mySqlConnection = new MySqlConnection(sqlString);
        }

        private async Task OpenAsync()
        {
            if (mySqlConnection.State != ConnectionState.Open)
                await mySqlConnection.OpenAsync();
        }

        private async Task CloseAsync()
        {
            if (mySqlConnection.State != ConnectionState.Closed)
                await mySqlConnection.CloseAsync();
        }

        public async Task<MySqlDataReader> Select(string sql)
        {
            await OpenAsync();
            mySqlCommand = new MySqlCommand(sql, mySqlConnection);
            return await mySqlCommand.ExecuteReaderAsync(CommandBehavior.CloseConnection);
        }

        public async Task<long> Insert(string sql)
        {
            await OpenAsync();
            mySqlCommand = new MySqlCommand(sql, mySqlConnection);
            await mySqlCommand.ExecuteNonQueryAsync();
            long id = mySqlCommand.LastInsertedId;
            await CloseAsync();
            return id;
        }

        public async Task<int> Update(string sql)
        {
            await OpenAsync();
            mySqlCommand = new MySqlCommand(sql, mySqlConnection);
            int affectedRows = await mySqlCommand.ExecuteNonQueryAsync();
            await CloseAsync();
            return affectedRows;
        }

        public async Task<int> Delete(string sql)
        {
            await OpenAsync();
            mySqlCommand = new MySqlCommand(sql, mySqlConnection);
            int affectedRows = await mySqlCommand.ExecuteNonQueryAsync();
            await CloseAsync();
            return affectedRows;
        }

        public void Dispose()
        {
            mySqlConnection.Close();
            mySqlConnection.Dispose();
        }

        public async ValueTask DisposeAsync()
        {
            await mySqlConnection.CloseAsync();
            await mySqlConnection.DisposeAsync();
        }
    }
}