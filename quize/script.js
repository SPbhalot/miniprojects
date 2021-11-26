var quize=[
    {
        Q:"Q:1 - What is the full form of HTML ?",
        a1:"Hyper Markup Language",
        a2:"hyper Markup Link",
        a3:"Hypertext Marker Language",
        a4:"Hypertext Markup Language",
        ans:"ans4",
    },   {
        Q:"Q:2 - What is the full form of CSS ?",
        a1:"Cascading Style Sheets",
        a2:"Cascading Style Sheet",
        a3:"Cascad Style Sheets",
        a4:"Cascading Styles Sheets",
        ans:"ans1",
    }, 
     {
        Q:"Q:3 - What is the full form of JS ?",
        a1:"JavaScrip",
        a2:"JavaScripted",
        a3:"JavaScript",
        a4:"JavaSkript",
        ans:"ans3",
    },
    {
        Q:"Q:4 - What is not an HTML5 element?",
        a1:"section",
        a2:"header",
        a3:"main",
        a4:"blink",
        ans:"ans4",
    },
    {
        Q:"Q:5 - Inside which HTML element do we put the JavaScript?",
        a1:"script",
        a2:"javascript",
        a3:"JS",
        a4:"link",
        ans:"ans1",
    },
];
const quetion = document.querySelector('#quetion');
const op1 = document.querySelector('#op1');
const op2 = document.querySelector('#op2');
const op3 = document.querySelector('#op3');
const op4= document.querySelector('#op4');
const answer= document.querySelectorAll(".answer");
const submit= document.querySelector("#submit");
const show= document.querySelector("#show");


let count=0;
let score=0;

function prev(){
    count--;
    quetion.innerText=quize[count].Q ;
 op1.innerText=quize[count].a1;
 op2.innerText=quize[count].a2;
 op3.innerText=quize[count].a3;
 op4.innerText=quize[count].a4;
}

function set(){
 quetion.innerText=quize[count].Q ;
 op1.innerText=quize[count].a1;
 op2.innerText=quize[count].a2;
 op3.innerText=quize[count].a3;
 op4.innerText=quize[count].a4;
}
set();
    const submitText=()=>{
        let finalans;
        answer.forEach((element) => {
            if(element.checked){
                 finalans=element.id;
            }
        });
        return finalans;
    };
    
submit.addEventListener('click', ()=>{
    const getans = submitText();
    console.log(getans);
    if(getans===quize[count].ans){
        score++;
    }
 
    count++;
     
    if(count<quize.length){
        set();
       
       
    }else{
        show.innerHTML=
        `<div class="sc"><h3>you score ${score}/${quize.length}</h3>
          <button class="btn" onClick="location.reload()">Play again</button>

          
          
          
          
          </div>`;
        show.classList.remove('score');
    }
})









