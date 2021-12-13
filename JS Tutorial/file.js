var a = 10;

console.log(a)

for(var i=0; i<10; i++)
{
    console.log(i);
}

switch (a) {
    case 1:
        console.log("Found")
        break;
    case 10:
        console.log("found")

    default:
        break;
}

// var btn1 = document.querySelector(".b1");
// var btn2 = document.querySelector(".b2");
// var btn3 = document.querySelector(".b3");
// var btn4 = document.querySelector(".b4");

// console.log(btn1);
// console.log(btn2);
// console.log(btn3);
// console.log(btn4);


var btn = document.querySelectorAll("button")

for(var i=0; i<btn.length; i++)
{
    
    btn[i].style.background="yellow"
}


