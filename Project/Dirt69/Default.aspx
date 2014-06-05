<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Dirt 69</title><link href="Stylesheet.css" rel="stylesheet" />
</head>
<body>
    <script type="text/javascript">

        //Tar bort högerklick på hemsidan!
        var message = "Function disabled! Sucks to be you!";

        function clickIE4() {
            if (event.button == 2) {
                alert(message);
                return false;
            }
        }

        function clickNS4(e) {
            if (document.layers || document.getElementById && !document.all) {
                if (e.which == 2 || e.which == 3) {
                    alert(message);
                    return false;
                }
            }
        }

        if (document.layers) {
            document.captureEvents(Event.MOUSEDOWN);
            document.onmousedown = clickNS4;
        }
        else if (document.all && !document.getElementById) {
            document.onmousedown = clickIE4;
        }

        document.oncontextmenu = new Function("alert(message);return false")
</script>


    <form id="form1" runat="server">

        <img class="Logga2" src="Logga2.png" style="height: 350px; margin-top: -120px;" />
        <div>

        <asp:Login ID="LoginDirt" runat="server" OnAuthenticate="Login1_Authenticate" FailureText="" LoginButtonText="Logga in" UserNameLabelText="Användarnamn:" PasswordLabelText="Lösenord:" TitleText="Logga in">
            <LayoutTemplate>
                <table cellpadding="1" cellspacing="0" style="border-collapse:collapse;">
                    <tr>
                        <td>
                            <table cellpadding="0">
                                <tr>
                                    <td align="center" colspan="2">Logga in</td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <asp:Label ID="UserNameLabel" runat="server" AssociatedControlID="UserName">Användarnamn:</asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="UserName" runat="server"></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="UserNameRequired" runat="server" ControlToValidate="UserName" ErrorMessage="User Name is required." ToolTip="User Name is required." ValidationGroup="LoginDirt">*</asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">
                                        <asp:Label ID="PasswordLabel" runat="server" AssociatedControlID="Password">Lösenord:</asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="Password" runat="server" TextMode="Password"></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password" ErrorMessage="Password is required." ToolTip="Password is required." ValidationGroup="LoginDirt">*</asp:RequiredFieldValidator>
                                    </td>

                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <asp:CheckBox ID="RememberMe" runat="server" Text="Remember me next time." />
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="2" style="color:Red;">
                                        <asp:Literal ID="FailureText" runat="server" EnableViewState="False"></asp:Literal>
                                    </td>
                                </tr>
                                <tr>

                                    <td align="right" colspan="2">
                                        <asp:Button ID="LoginButton" runat="server" CommandName="Login" Text="Logga in" ValidationGroup="LoginDirt" CssClass="Login" />
                                    </td>

                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </LayoutTemplate>
            </asp:Login>
        </div>

        <div> <asp:Button ID="Signout" runat="server" Text="Logga ut" OnClick="Button_Signout" Visible="false" CssClass="Login" /> </div>        

        <div><asp:Label ID="MisslyckadInloggning" ForeColor="Red" runat="server" Text=""></asp:Label> </div>

        <div><asp:Label ID="LyckadInloggning" runat="server" Text=""></asp:Label></div>

        <div id="Footer">This website and its contents are copyright ©2013 Månsbin Robmån Productions.</div>

        <%--<div id="Register"> <a href="Register1.aspx" class="Login">Registrera</a> </div>--%>

        <div><asp:Button ID="Register" runat="server" OnClick="Register1_Click" Text="Registrera" class="Login" Visible="true"/> </div>

<%--        <div id="ImageSwap">
         <img class="bottom" src="Twitter_blue.png" style="height: 50px;" />
          <img class="top" src="Twitter_white.png" style="height: 50px;" />
       </div>--%>

<%--        <div id="Facebook">
         <img class="bottom" src="FindUsOnFacebook.png" style="height: 30px;" /></div>--%>

        
    </form>
</body>
</html>




