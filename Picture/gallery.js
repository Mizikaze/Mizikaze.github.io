
lastImage = null; 				// Sätter 'lastImage' variabeln till 0

marginleftPx = 0;

indexNum = 0;

pictures = ["pics/pic1.png", "pics/pic2.png", "pics/pic3.png", "pics/pic4.png", "pics/pic5.png", "pics/pic6.png", "pics/pic7.png", "pics/pic8.png", "pics/pic9.png", "pics/pic10.png"];      // En array för bilderna


$(document).ready(function () 
{


    $("#smallImage img").click(function ()					// Funktion som "zoomar" upp bilden man klickar på
    {
        picSrc = $(this).attr("src");                       // Variabel för vilken bild man trycker på
        $("#zoomIn").fadeIn();                              // "Fadear" in allt inom 'zoomIn' diven.
        $("#zoomImage img").attr("src", picSrc);            // Använder 'picSrc' variabeln för att bestämma vilken bild som ska vara stor
        lastImage = $("#zoomImage img");                    // Variabel för vilken bild som senast var stor
    })

    $("#thumb_img").css("margin-left", marginleftPx);

    $("#thumb_img img").click(function ()					    // Funktion som gör att den stora bilden ändras beroende på vilken bild man klickar på i thumbnailen
    {
        picSrc = $(this).attr("src"); 						    // Variabel för vilken bild man trycker på
        if (lastImage != null)                                  // if-sats som "gömmer" den stora bilden om man klickar på en av de små bilderna
            lastImage.hide();                                   // -||-
        $("#zoomImage img").attr("src", picSrc).fadeIn();       // "Fadear" in den nya stora bilden
    })

    $("#nextRow img").click(function ()                         // Funktion som "scrollar" raden med småbilder till höger
    {
        $("#thumb_img").css("margin-left", marginleftPx -= 613);
    })                                                              

    $("#prevRow img").click(function ()                         // Funktion som "scrollar" raden med småbilder till vänster
    {                           
        $("#thumb_img").css("margin-left", marginleftPx += 613);
    }) 


    $(window).keyup(function (e)                                // Funktion som säger åt sidan att göra vissa saker om vi trycker ner följande knappar
    {                                                   
        if (e.keyCode == 37) 
        {                                                       // Om man trycker på vänsterpilen så byter den till föregående bild
            lastImage.hide();                                                        //
            indexNum--;                                                              //
            if (indexNum == -1) indexNum = 9;                                        //
            $('#zoomImage img').attr('src', pictures[indexNum]).fadeIn();            //
        }

        if (e.keyCode == 39) 
        {                                                      // Om man trycker på högerpilen så byter den till nästa bild
            lastImage.hide();                                                       //
            indexNum++;                                                             //
            if (indexNum == 10) indexNum = 0;                                       //
            $('#zoomImage img').attr('src', pictures[indexNum]).fadeIn();           //
        }

    })

    
    document.onkeypress = onKeyPress;
})


function zoomImage_click()									// Funktion som döljer det "inzoomade" läget om man trycker på den stora bilden
{                                                           //
    $("#zoomIn").fadeOut();                                 // "Fadear" ut det som finns i 'zoomIn' diven
    marginleftPx = 0;                                       // "Resettar" thumbnailen
}

function onKeyPress(e)                                      // Funktion som döljer det "inzoomade" läget om man trycker på Enter knappen
{                                                           //
    if (e.keyCode == 13)                                    //
    {                                                       //
        $("#zoomIn").fadeOut();                             //  "Fadear" ut det som finns i 'zoomIn' diven
        marginleftPx = 0;                                   //  "Resettar" thumbnailen
    }
}

// 13 = Enter
// 37 = left arrow
// 39 = right arrow