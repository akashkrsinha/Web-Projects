// var b1 = document.querySelector(".btn-1");
// console.log(b1)
// var b2 = document.querySelector(".btn-2");
// console.log(b2)
// var b3 = document.querySelector(".btn-3");
// console.log(b3)


for( var i=0; i<10; i++)
{
    console.log(i);
}

function fun()
{
    console.log("Hello Fun")
}

function recFunc(name, fun)
{
    console.log(name);
    fun();
}

recFunc("Akash", fun);