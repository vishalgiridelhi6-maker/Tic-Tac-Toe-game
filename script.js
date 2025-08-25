let box_btn=document.querySelectorAll(".box");
let container=document.querySelector(".msg-container");
let msg=document.querySelector(".msg-head");
let newbtn=document.querySelector(".new-btn");
let btn=document.querySelector(".btn");
let audio= new Audio("vishal.mp3");
let headhide=document.querySelector(".head");


turn0=true;

let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



box_btn.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(turn0===true ){
            val.innerText="o";
            turn0=false;
        }
        else if( turn0===false){
            val.innerText="x";
            turn0=true;
        }
        val.disabled=true;
        audio.play();
        checkwinner();
        
   
        
    })
});
let checkwinner=()=>{
    for( let pattern of winpattern){
        let pos1val=box_btn[pattern[0]].innerText;
        let pos2val=box_btn[pattern[1]].innerText;
        let pos3val=box_btn[pattern[2]].innerText;

        if( pos1val !=="" && pos2val !=="" && pos3val !==""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log( "winner", pos1val)
                
                showwinner(pos1val);
            }
        }
    }
};
 
const showwinner=(winner)=>{
    msg.innerText=`The winner is  ${winner}`;
    container.classList.remove("hide");
     headhide.style.display="none"
     document.querySelector(".head").style.display="none";
    disabledbox();
};

 const disabledbox=()=>{
    for( let box of box_btn){
        box.disabled=true;
          
    } 
 }
 const unablebox=()=>{
    for( let i of box_btn){
        i.disabled=false;
        turn0=true;
        i.innerText="";
        audio.play();
        container.classList.add("hide");
        document.querySelector(".head").style.display="block";
    }
 }
 btn.addEventListener("click", unablebox);
 newbtn.addEventListener("click", unablebox);


 