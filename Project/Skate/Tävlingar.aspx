<%@ Page Title="" Language="C#" MasterPageFile="MasterPage.master" AutoEventWireup="true" CodeFile="Tävlingar.aspx.cs" Inherits="Tävlingar" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" runat="Server" ContentPlaceHolderID="ContentPlaceHolder1">
    <div class="conteiner" runat="server" visible=true>

        <div id="login" runat="server" visible=true>
            <asp:Label ID="lbluser" runat="server" Text="Username: "></asp:Label>
            <asp:TextBox ID="txtuser" runat="server"></asp:TextBox>
            <br />
            <asp:Label ID="lblpass" runat="server" Text="Password: "></asp:Label>
            <asp:TextBox ID="txtpass" runat="server" TextMode="Password"></asp:TextBox>
            <br />
            <asp:Button ID="loginbutton" runat="server" Text="Login" 
                onclick="loginbutton_Click" />
            <br />
            <asp:Label ID="Label1" runat="server" Text="OBS(Username = SkateNoz & Password = admin)!!" Font-Size="Small"></asp:Label>
        </div>

        <div id="showpics" runat="server" visible=false>
            <script src="library.js"></script>
            <script src="gallery.js"></script>
            <script type="text/javascript">
                {
                    pic1 = new Image();
                    pic1.src = "pics/pic1.jpg";
                    pic2 = new Image();
                    pic2.src = "pics/pic2.jpg";
                    pic3 = new Image();
                    pic3.src = "pics/pic3.jpg";
                    pic4 = new Image();
                    pic4.src = "pics/pic4.jpg";
                    pic5 = new Image();
                    pic5.src = "pics/pic5.jpg";

                    pic6 = new Image();
                    pic6.src = "pics/pic6.jpg";
                    pic7 = new Image();   
                    pic7.src = "pics/pic7.jpg";
                    pic8 = new Image();  
                    pic8.src = "pics/pic8.jpg";
                    pic9 = new Image();  
                    pic9.src = "pics/pic9.jpg";
                    pic10 = new Image();
                    pic10.src = "pics/pic10.jpg";
                }
            </script>

                <div id="smallImage">
                    <img src="pics/pic1.jpg" alt="" />
		            <img src="pics/pic2.jpg" alt="" />
		            <img src="pics/pic3.jpg" alt="" />
		            <img src="pics/pic4.jpg" alt="" />
		            <img src="pics/pic5.jpg" alt="" />

                    <img src="pics/pic6.jpg" alt="" />
		            <img src="pics/pic7.jpg" alt="" />
		            <img src="pics/pic8.jpg" alt="" />
		            <img src="pics/pic9.jpg" alt="" />
		            <img src="pics/pic10.jpg" alt="" />
                </div>

            </div>

        </div>

     </div>

</asp:Content>
