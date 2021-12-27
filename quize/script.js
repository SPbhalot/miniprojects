var quize=[
    {
        Q:"Q:1 - What is the full form of HTML ?",
        a1:"Hyper Markup Language",
        a2:"Hyper Markup Link",
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
    {
        Q:"Q:6 - The # symbol specifies that the selector is?",
        a1:"class",
        a2:"id",
        a3:"tag",
        a4:"first",
        ans:"ans2",
    },
    {
        Q:"Q:7  - var a = []; What does 'typeof a' return? ",
        a1:"object",
        a2:"array",
        a3:"string",
        a4:"undefined",
        ans:"ans1",
    },
    {
        Q:"Q:8  - Which of the following function of Array object removes the last element from an array and returns that element? ",
        a1:"push()",
        a2:"join()",
        a3:"pop()",
        a4:"map()",
        ans:"ans3",
    },
    {
        Q:"Q:9 - Which snippet of CSS is commonly used to center a website horizontally?        ",
        a1:"site-align: center;",
        a2:"margin: center;",
        a3:"margin: auto 0;",
        a4:"margin: 0 auto;",
        ans:"ans2",
    },
    {
        Q:"Q:10  -Which HTML5 element defines navigation links?",
        a1:"avigation",
        a2:"links",
        a3:"nav",
        a4:"navigate",
        ans:"ans3",
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
const optiondisbal= document.querySelector(".optiondisbal");


let count=0;
let score=0;


function set(){
 quetion.innerText=quize[count].Q ;
 op1.innerText=quize[count].a1;
 op2.innerText=quize[count].a2;
 op3.innerText=quize[count].a3;
 op4.innerText=quize[count].a4;
}
set();
optiondisbal.addEventListener('click',()=>{
    submit.classList.remove("btndisble")
}
)




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
    submit.classList="btn btndisble"
    const getans = submitText();
    if(getans===quize[count].ans){
        score++;
    }
 const  diselect = ()=>{
     answer.forEach((curr)=>{
         curr.checked=false;
         
     })
 }
 diselect();
    count++;
     
    if(count<quize.length){
        set();
       
       
    }else{
        show.innerHTML=
        `<div class="sc"><h3>you score ${score}/${quize.length}</h3>
          <button class="btn" onClick="location.reload()">Start again</button> 
          </div>`;
        show.classList.remove('score');
    }
})









