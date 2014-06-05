<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Register.aspx.cs" Inherits="Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Dirt 69</title><link href="Stylesheet.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
    
        <img class="Logga2" src="Logga2.png" style="height: 350px; margin-top: -120px;" />
    <div>

     <script type="text/javascript">

         //Tar bort högerklick på hemsidan!
         var message = "Function Disabled! Sucks to be you!";

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
        </div>

        <div id="fuck">
            <asp:Label ID="UserNameLabel" runat="server" Text="Användarnamn:"></asp:Label>

            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="UserName" ErrorMessage="Fyll i Användarnamn"></asp:RequiredFieldValidator>

            <asp:TextBox ID="UserName" MaxLength="16" runat="server"></asp:TextBox>
            <div id="UsernameTroubles">
               

                <asp:Label ID="PasswordLabel" runat="server" Text="Lösenord:"></asp:Label>

                <asp:TextBox ID="Password" runat="server" TextMode="Password"></asp:TextBox><asp:RegularExpressionValidator ID="RegularExpressionValidator2" runat="server" ForeColor="Red" ControlToValidate="Password"
                    ValidationExpression="(?=.{8,})[a-zA-Z]+[^a-zA-Z]+|[^a-zA-Z]+[a-zA-Z]+"
                    Display="Dynamic" ErrorMessage="Lösenordet måste vara minst 8 bokstäver långt och innehålla både bokstäver och siffror."></asp:RegularExpressionValidator>

                <asp:Label ID="PasswordLabel2" runat="server" Text="Bekräfta lösenord:"></asp:Label>

                <asp:TextBox ID="Password2" runat="server" TextMode="Password"></asp:TextBox><asp:CompareValidator ID="CompareValidator1" runat="server" ForeColor="Red" ErrorMessage="Passwords do not match!" ControlToValidate="Password2" ControlToCompare="Password"></asp:CompareValidator>

                <br />

                <asp:Button ID="RegisterButton" runat="server" CommandName="Login" Text="Registrera dig" ValidationGroup="LoginDirt" OnClick="RegisterButton_Click" />
            </div>


            <div>
                <asp:Label ID="LabelError" runat="server" Text=""></asp:Label>
            </div>

            <div>
                <asp:Label ID="MisslyckadRegistrering" runat="server" Text=""></asp:Label>
            </div>

            <div>
                <asp:Label ID="LyckadRegistrering" runat="server" Text=""></asp:Label>
            </div>

            <div>
                <asp:Label ID="LabelRegister" runat="server" Text=""></asp:Label>
            </div>


            <div id="Footer">This website and its contents are copyright ©2013 Månsbin Robmån Productions.</div>


            <div id="Return"><a href="Default.aspx" class="Login">Återvänd</a></div>

        </div>
    </form>
</body>
</html>
