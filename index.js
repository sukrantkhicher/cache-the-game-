let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");
let btn = document.getElementById("start");
let image = document.querySelectorAll("img")
let main = document.querySelector(".main")
let span1 = document.getElementById("Time1")
let span2 = document.getElementById("Time2")

btn.onclick = () => {
    screen1.style.display = "none";
    screen2.style.display = "block";
}
let x = ""
let avatar = ""

for (let i = 0; i < image.length; i++) {
    image[i].onclick = (e) => {
        e.preventDefault()
        screen2.style.display = "none";
        screen3.style.display = "block";
        avatar = image[i]
        //    console.log(avatar)
        random()
         x=setInterval(timeLimit,1000);
        
    }
}

function random() {
    main.appendChild(avatar)

    setInterval(() => {
        let y = screen3.clientHeight;
        let z = screen3.clientWidth;
        let pic = document.createElement('img');
        pic.src = avatar.src;
        main.insertAdjacentElement('beforeend', pic);
        let top = Math.random() * y;
        let left = Math.random() * z;
        pic.style.left = left + "px";
        pic.style.top = top + "px";
   
    }, 1000);   
}

let Score=0;

main.onclick = (e)=> {
    // console.log(e.target.tagName.toLowerCase())
    if(e.target.tagName.toLowerCase() === "img"){
        e.target.style.display = "none"
        Score++
        span2.innerHTML = Score
    }
}

let time=0;
function timeLimit(){
   span1.innerHTML=time++
   if(time==61){
    clearInterval(x)
   }
}