using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.OleDb;

public partial class Laboration : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

     protected void RegisterButton_Click(object sender, EventArgs e)
    {

        string strConnConf = ("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + (Server.MapPath("App_Data\\Dirtdb.mdb") + ";"));               //skapar en dataanslutning
        OleDbConnection checkUsername = new OleDbConnection(strConnConf);
        string Usernamestring = ("select * from Användare where ANVID = '" + UserName.Text + "'");
        OleDbCommand CmdUsername = new OleDbCommand(Usernamestring, checkUsername);

        OleDbDataReader usernamecheck;
        checkUsername.Open();
        usernamecheck = CmdUsername.ExecuteReader(System.Data.CommandBehavior.CloseConnection);

        if (usernamecheck.Read())
        {
            LabelRegister.Visible = false;
            LabelError.Visible = true;
            LabelError.Text = "Användarnamnet är redan taget, vänligen byt!";
          

        }
        else
        {

        string strConn = ("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + (Server.MapPath("App_Data\\DirtDb.mdb") + ";"));
        string MySQL = ("Insert into Användare (ANVID,LÖSEN) values('" + UserName.Text + "','" + Password.Text + "')");
        OleDbConnection MyConn = new OleDbConnection(strConn);
        OleDbCommand Cmd = new OleDbCommand(MySQL, MyConn);
        OleDbDataReader objDR;
        MyConn.Open();
        objDR = Cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
        objDR.Close();
        MyConn.Close();
        LabelRegister.Visible = true;
        LabelError.Visible = false;
        LabelRegister.Text = "Du har nu registrerat ett konto!";
        }   
    }









}