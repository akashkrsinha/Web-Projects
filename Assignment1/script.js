var round = document.querySelectorAll(".round");
var color1 = document.querySelector(".c1")
var color2 = document.querySelector(".c2")
var color3 = document.querySelector(".c3")
var color4 = document.querySelector(".c4")
var resetButoon = document.querySelector(".resetButton")

const cars = ["red", "green", "blue", "black", "pink", "violet", "orange", "yellow", "white", "purple"];

color1.addEventListener("click", setColor1)
color2.addEventListener("click", setColor2)
color3.addEventListener("click", setColor3)
color4.addEventListener("click", setColor4)

for(var i=0; i<round.length; i++)
{
    var ran = (Math.floor(Math.random() * 10))
    round[i].style.background = cars[ran];
}

function setColor1()
{
    for(var i=0; i<round.length; i++)
    {
        if(round[i].style.background != "blue")
        {
            round[i].style.background = "white"
        }
    }
}

function setColor2()
{
    for(var i=0; i<round.length; i++)
    {
        if(round[i].style.background != "green")
        {
            round[i].style.background = "white"
        }
    }
}

function setColor3()
{
    for(var i=0; i<round.length; i++)
    {
        if(round[i].style.background != "yellow")
        {
            round[i].style.background = "white"
        }
    }
}

function setColor4()
{
    for(var i=0; i<round.length; i++)
    {
        if(round[i].style.background != "red")
        {
            round[i].style.background = "white"
        }
    }
}

function reset()
{
    for(var i=0; i<round.length; i++)
    {
    var ran = (Math.floor(Math.random() * 10))
    round[i].style.background = cars[ran];
    }
}

resetButoon.addEventListener("click", reset)
