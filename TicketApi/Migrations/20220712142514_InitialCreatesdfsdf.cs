using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TicketApi.Migrations
{
    public partial class InitialCreatesdfsdf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Tickets",
                newName: "TicketId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Shows",
                newName: "ShowId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Places",
                newName: "PlaceId");

            migrationBuilder.AddColumn<int>(
                name: "Duration",
                table: "Shows",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Duration",
                table: "Shows");

            migrationBuilder.RenameColumn(
                name: "TicketId",
                table: "Tickets",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ShowId",
                table: "Shows",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "PlaceId",
                table: "Places",
                newName: "Id");
        }
    }
}
