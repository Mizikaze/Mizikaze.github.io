using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Tävlingar : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void loginbutton_Click(object sender, EventArgs e)
    {
        if (txtuser.Text == "SkateNoz" && txtpass.Text == "admin")
        {
            login.Visible = false;
            showpics.Visible = true;
        }
            
    }
}