function drawP1(x, y)
{
    rectangle(x + 3 / 3, y + 30 / 3, 23 / 3, 65 / 3, "#FFDBA6");
    rectangle(x +3 / 3, y + 15 / 3, 23 / 3, 65 / 3, "#2B2B2B");
    circle(x + 15 / 3, y, 20 / 3, "#FFDBA6");
    circle(x + 3 / 3, y, 4 / 3, "#C90000");
    rectangle(x - 75 / 3, y + 3 / 3, 40 / 3, 12 / 3, "#E0E0E0");
    line(x - 33 / 3, y + 35 / 3, x - 33 / 3, y + 3 / 3, 5 / 3, "brown");
    rectangle(x - 35 / 3, y + 20 / 3, 30 / 3, 14 / 3, "#FFDBA6");
    rectangle(x - 20 / 3, y + 20 / 3, 30 / 3, 14 / 3, "#2B2B2B");
	rectangle(x - 5 / 3, y - 55 / 3, 40 / 3, 45 / 3, "black");
	line(x - 20 / 3, y - 10 / 3, x + 50 / 3, y - 10 / 3, 5 / 3, "black");
}

function drawP2(x, y)
{
    rectangle(x + 3 / 3, y + 30 / 3, 23 / 3, 65 / 3, "#FFDBA6");
    rectangle(x + 3 / 3, y + 15 / 3, 23 / 3, 65 / 3, "#2B2B2B");
    circle(x + 15 / 3, y, 20 / 3, "#FFDBA6");
    circle(x + 27 / 3, y, 4 / 3, "#AF24FF");
    rectangle(x + 62 / 3, y + 3 / 3, 40 / 3, 12 / 3, "#E0E0E0");
    line(x + 62 / 3, y + 35 / 3, x + 62 / 3, y + 3 / 3, 5 / 3, "brown");
    rectangle(x + 35 / 3, y + 20 / 3, 30 / 3, 14 / 3, "#FFDBA6");
    rectangle(x + 20 / 3, y + 20 / 3, 30 / 3, 14 / 3, "#2B2B2B");
    triangle(x + 60 / 3, y, x - 35 / 3, y - 15 / 3, x + 20 / 3, y - 40 / 3, "orange");
}

function drawCloud(z)
{
    circle(300, 100, z, "white");
    circle(340, 150, z, "white");
    circle(380, 90, z, "white");
    circle(420, 130, z, "white");
    circle(460, 100, z, "white");
    circle(500, 140, z, "white");
    circle(540, 120, z, "white");
    circle(580, 150, z, "white");
    circle(620, 110, z, "white");
}

function drawH1(x, y, h)
{
    rectangle(x, y+ 50, h * 0.75, 5, "red");
    rectangle(x, y + 54, 75, 2, "black");
}

function drawH2(x, y, h)
{
    rectangle(x, y + 50, h *0.75, 5, "red");
    rectangle(x, y + 54, 75 , 2, "black");
}

function start() 
{
    shots = [];


    drawP1X = 900;
    drawP1Y = 300;

    drawP2X = 200;
    drawP2Y = 300;

    velocity = 0;
    velocity2 = 0;
    g = 9.82 * 0.1;
    
    healthP1 = 100;
    healthP2 = 100; 

    lastShotP1 = 0;
    lastShotP2 = 0;

}

function attack(x, y, xSpeed)
{
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;

    this.updateShot = function()
    {
        this.x += this.xSpeed;

        circle(this.x, this.y, 5 / 3, "#8F0066");

    }
}

function blood(x, y, xSpeed, ySpeed)
{
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = yspeed;
}

function update()
{
    
    totalWidth = canvas.width;

    velocity += g;
    velocity2 += g;

    drawP1Y += velocity;
    drawP2Y += velocity2;

    lastShotP1--;
    lastShotP2--;

    if (drawP1Y > 450 && velocity > 0) 
	{
        velocity = 0;
        drawP1Y = 450;
    }
    if (drawP2Y > 450 && velocity2 > 0)
	{
        velocity2 = 0;
        drawP2Y = 450;
    }

         
    clearScreen();

    picture(0, 1, "Gbg.png");
    picture(300, 100, "cloud.png");
    picture(0, 477, "grd.png");
//  picture(1080, 0
//  rectangle(0, 480, 1350, 300, "green");
    

    if (keyDown(left) && drawP1X > 19)
        drawP1X -= 7;

    if (keyDown(right) && drawP1X < (canvas.width - 20))
        drawP1X += 7;
    
    if (keyDown(up) && velocity == 0) 
        velocity = -15;
    
    if (keyDown(96) && lastShotP1 <= 55)
    {
        shots.push(new attack(drawP1X - 10, drawP1Y + 3, -10));
        lastShotP1 += 27;
    }
    //if (keyDown(76))
    //    healthP1 += 2;


    if (keyDown(a) && drawP2X > 10)
        drawP2X -= 7;

    if (keyDown(d) && drawP2X < (canvas.width) - 25)
        drawP2X += 7;

    if (keyDown(w) && velocity2 == 0)
        velocity2 = -15;

    if (keyDown(32) && lastShotP2 <= 55)
    {
       shots.push(new attack(drawP2X + 20, drawP2Y + 3, +10));
       lastShotP2 += 27;
    }
   //if (keyDown(81))
   //    healthP2 += 2;

//    drawCloud(50);
    

    for (var i = 0; i < shots.length; i ++)
    {
        shots[i].updateShot();
    }    

    drawP2(drawP2X, drawP2Y);
    drawH2(drawP2X - 35 , drawP2Y - 100, healthP2);

    drawP1(drawP1X, drawP1Y);s
    drawH1(drawP1X - 35 , drawP1Y - 100, healthP1);
    
    drawP1Height = 40;
	drawP1Width = 20;



    for (i in shots)
    {
        if (!( shots[i].x > drawP1X + drawP1Width || 
               shots[i].x < drawP1X || 
               shots[i].y > drawP1Y + drawP1Height ||
               shots[i].y + 5 < drawP1Y ))
        {
            healthP1 -= 3;
        }
    }

    drawP2Height = 40;
	drawP2Width = 20;
      
    for (i in shots)
    {
        if (!( shots[i].x > drawP2X + drawP2Width || 
               shots[i].x < drawP2X || 
               shots[i].y > drawP2Y + drawP2Height ||
               shots[i].y + 5 < drawP2Y ))
        {
            healthP2 -= 3;
        }
        
    }
    if (healthP1 <= 0)
    {
        stopUpdate();
        clearScreenWithColor("black");
        text("Player 2 wins!", 350, 325, "#AF24FF", 50);
    }

    if (healthP2 <= 0)
    {
        stopUpdate();
        clearScreenWithColor("black");
        text("Player 1 wins!", 350, 325, "#C90000", 50);

    }
}