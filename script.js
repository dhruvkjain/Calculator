let display=document.getElementsByClassName("display")[0];
let ac=document.getElementsByClassName("clear")[0];
let del=document.getElementsByClassName("delete")[0];

let n7=document.getElementsByClassName("n7")[0];
let n8=document.getElementsByClassName("n8")[0];
let n9=document.getElementsByClassName("n9")[0];
let n4=document.getElementsByClassName("n4")[0];
let n5=document.getElementsByClassName("n5")[0];
let n6=document.getElementsByClassName("n6")[0];
let n1=document.getElementsByClassName("n1")[0];
let n2=document.getElementsByClassName("n2")[0];
let n3=document.getElementsByClassName("n3")[0];

let operations = document.querySelectorAll(".operation");
// console.log(operations);

let n00=document.getElementsByClassName("n00")[0];
let n0=document.getElementsByClassName("n0")[0];
let dot=document.getElementsByClassName("dot")[0];
let equal=document.getElementsByClassName("equal")[0];
let numbers=document.querySelectorAll(".number");
let history=document.getElementsByClassName("history")[0];
let buttons=document.querySelectorAll(".b");

let cal=document.getElementsByClassName("frame")[0];

// console.log(numbers);
buttons.forEach(btns =>{
    btns.addEventListener("click",()=>{
        btns.classList.toggle("increase");
    })
});


numbers.forEach(num =>{
    num.addEventListener("click",()=>{
        display.textContent+=num.innerHTML;  
    })
});
ac.addEventListener("click" , ()=>{
    display.textContent="";
    history.textContent="";
    ans=null;
});
dot.addEventListener("click" , ()=>{
    display.textContent+=dot.innerHTML;
});
del.addEventListener("click" , ()=>{
    display.innerHTML = display.innerHTML.substring(0,display.innerHTML.length-1);   
});


let num1,num2;
let operation;
let ans=null ;

operations.forEach(op =>{
    op.addEventListener("click",()=>{
        if(ans === null){
            num1 = display.textContent;
        }
        else{
            num1=ans;
        }
        display.textContent="";
        history.textContent=num1+op.innerHTML;
        operation=op.innerHTML;
        setInterval(()=>{
            num2 = display.textContent;
            if(operation === "/"){
                ans=(Number(num1)/Number(num2));
            }
            if(operation === "×"){
                ans=(Number(num1)*Number(num2));
            }
            if(operation === "+"){
                ans=(Number(num1)+Number(num2));
            }
            if(operation === "-"){
                ans=(Number(num1)-Number(num2));
            }
        });
    });
});
equal.addEventListener("click" , ()=>{
    // num2 = display.textContent;

    display.textContent=ans;
    ans=null;
    num1="";
    num2="";
    history.textContent="";
    // if(operation === "/"){
    //     history.textContent="";
    //     display.textContent=(Number(num1)/Number(num2));
    // }
    // if(operation === "×"){
    //     history.textContent="";
    //     display.textContent=(Number(num1)*Number(num2));
    // }
    // if(operation === "+"){
    //     history.textContent="";
    //     display.textContent=(Number(num1)+Number(num2));
    // }
    // if(operation === "-"){
    //     history.textContent="";
    //     display.textContent=(Number(num1)-Number(num2));
    // }

});
