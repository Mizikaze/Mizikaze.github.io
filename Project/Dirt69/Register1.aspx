<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Register1.aspx.cs" Inherits="Laboration" %>

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
                 var message = "Nej men oj, vad trist att du inte kan högerklicka!";

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
    
        <asp:Label ID="UserNameLabel" runat="server" Text="Användarnamn:"></asp:Label>
    
        <asp:TextBox ID="UserName" runat="server"></asp:TextBox>

        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="UserName" ErrorMessage="Du måste fylla i minst en bokstav i fältet."></asp:RequiredFieldValidator>
        
        <asp:Label ID="PasswordLabel" runat="server" Text="Lösenord:"></asp:Label>

        <asp:TextBox ID="Password" runat="server" TextMode="Password"></asp:TextBox>

        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="Password" ErrorMessage="Detta fält får ej lämnas tomt."></asp:RequiredFieldValidator>
        <asp:RegularExpressionValidator ID="RangeValidator1" runat="server" ControlToValidate="Password" ErrorMessage="Lösenordet måste vara minst 6 bokstäver långt och max 16 bokstäver." ValidationExpression="^[A-Za-z0-9]{6,16}$"></asp:RegularExpressionValidator>
       
         
        
        <asp:Label ID="LabelBekraftaLosenord" runat="server" Text="Bekräfta lösenord:"></asp:Label>

        <asp:TextBox ID="Password2" runat="server" TextMode="Password"></asp:TextBox><asp:CompareValidator ID="CompareValidator1" runat="server" ForeColor="Red" ErrorMessage="Lösenorden matchar inte." ControlToValidate="Password" ControlToCompare="Password2"></asp:CompareValidator>
        
        <br />

        <asp:Button ID="RegisterButton" runat="server" Text="Registrera dig" OnClick="RegisterButton_Click" />

        <br />

        <asp:Label ID="LabelRegister" runat="server" Text="Label" Visible="False"></asp:Label>

        <asp:Label ID="LabelError" runat="server" Text="Label" Visible="False"></asp:Label>

                
            <div id="Footer">This website and its contents are copyright ©2013 Månsbin Robmån Productions.</div>


            <div id="Return"><a href="Default.aspx" class="Login">Återvänd</a></div>


    </form>
</body>
</html>
