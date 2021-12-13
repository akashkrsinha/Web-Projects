var plusBtn = document.querySelector(".plus");
var closeBtn = document.querySelector(".button");


function plusButton(){

    document.querySelector(".dialog")
    .style
    .display="flex";
}

function closeButton()
{
    document.querySelector(".dialog")
    .style
    .display="none";
}

function addDelTicketLogic()
{
    var closeBtn = document.getElementById("#icon3");
    var minimization  = document.querySelectorAll("#icon2");

    function closeTicket(e)
    {
        var box = e.target.closest(".box");
        console.log(box);
        box.style.display="none"
    }

        function minimize(e)
        {   
            alert("clicked")
            var box = e.target.closest(".box");
            console.log(box);

            if(box.querySelector("div.main").style.display !== "none")
            {
                box.querySelector("div.main").style.display = "none";
            }
            else{
                box.querySelector("div.main").style.display = "block"
            }
        }
    
        for(let index=0; index< closeBtn.length; index++)
        {
            const closeBtn = closeBtn[index];
            closeBtn.addEventListener("click", closeTicket);
        }

        for(let index=0; index< minimization.length; index++)
        {
            const closeBtn = minimization[index];
            closeBtn.addEventListener("click", minimize);
        }
     
}




function addTicket()
{
    closeButton()

    var boxes = document.querySelector(".wrapper main");
    var prevHTML = boxes.innerHTML;
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");

    boxes.innerHTML = prevHTML + `

    <div class="box">
                <div class="header">
                    <div class="left">${title.value}</div>
                    <div class="right">
                        <button class="icon" id="icon1">E</button>
                        <button class="icon" id="icon2">-</button>
                        <button class="icon" id="icon3">x</button>
                    </div>
                </div>
                <div class="main">
                    <textarea name="" id="" cols="3" class="box-textarea">  ${boxContent.value} </textarea>
                </div>
                <div class="footer"></div>
            </div>`
            title.value="";
            boxContent.value="";
            addDelTicketLogic();
}


plusBtn.addEventListener("click", plusButton);
closeBtn.addEventListener("click", closeButton);


