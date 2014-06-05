using System;
using System.Collections.Generic;
using System.Data.OleDb;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Login1_Authenticate(object sender, AuthenticateEventArgs e)
    {
        string strConn = ("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + (Server.MapPath("App_Data\\Dirtdb.mdb") + ";"));               //skapar en dataanslutning
        //string MySQL = ("Insert into UserBase (AID,LÖSEN) values('" + txtAID.Text + "','" + txtLOSEN.Text + "')");
        string MySQL = ("select * from Användare where ANVID = '" + LoginDirt.UserName + "' AND LÖSEN = '" + LoginDirt.Password + "'");
        OleDbConnection MyConn = new OleDbConnection(strConn);

        OleDbCommand Cmd = new OleDbCommand(MySQL, MyConn);
        OleDbDataReader objDR;
        MyConn.Open();
        objDR = Cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);

        if (objDR.Read())
        {
            FormsAuthentication.SetAuthCookie(LoginDirt.UserName, true); // man sätter en cookie när man har kommit förbi if-statsen där man kollar om lösen stämmer
            LyckadInloggning.Text = ("Välkommen, " + LoginDirt.UserName + ".");
            LoginDirt.Visible = false;
            Signout.Visible = true;
            MisslyckadInloggning.Visible = false;
            Register.Visible = false;
        }
        else
            MisslyckadInloggning.Text = ("Hoppsan! Det ser ut som att du har angett felaktig information.");

        if (Request.IsAuthenticated)
        {
            LyckadInloggning.Visible = true;
        }
       
        objDR.Close();
        MyConn.Close();
    }

    protected void Button_Signout(object sender, EventArgs e)
    {
        FormsAuthentication.SignOut();
        LoginDirt.Visible = true;
        Signout.Visible = false;
        LyckadInloggning.Visible = false;
        MisslyckadInloggning.Visible = false;
        Register.Visible = true;
    }
    protected void Register1_Click(object sender, EventArgs e)
    {
        Response.Redirect("Register1.aspx");
    }
}