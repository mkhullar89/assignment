var spannumbers=document.querySelectorAll("#randomNumbers");
var message=document.querySelector("#message");
var money=document.querySelector("#moneyLeft");
var button=document.querySelector("button");
money.textContent=900;

button.addEventListener("click",function(){
    money.textContent-=100;
    if(money.textContent<=0){
        
        button.disabled=true;
        message.textContent="Game Over !";
    }
    else{
    var value=numberselect();
    for(var i=0;i<spannumbers.length;i++){
        spannumbers[i].textContent=value[i];
    }
    
    rdnum1=Number(spannumbers[0].textContent);
    rdnum2=Number(spannumbers[1].textContent);
    rdnum3=Number(spannumbers[2].textContent);
        if(rdnum1===rdnum2){
           if(rdnum2===rdnum3){
           moneyLeft.textContent=Number(money.textContent)+1000;
           message.textContent="You Were Lucky This Time You Got 1000 INR because all numbers are Same";
           }
       }
       
        else if (((rdnum1%2)==0) && ((rdnum2%2)==0) && ((rdnum3%2)==0)) 
                {
                    moneyLeft.textContent=Number(money.textContent)+300;
                    message.textContent="You Were Lucky This Time You Got 300 INR because all numbers are Even";
                }
                
       else if (((rdnum1 %2)!=0) && ((rdnum2 %2)!=0) && ((rdnum3 %2)!=0)) 
        {
            moneyLeft.textContent=Number(money.textContent)+300;
            message.textContent="You Were Lucky This Time You Got 300 INR because all numbers are odd";
        }
        else if((((Math.abs(rdnum1-rdnum2)==1)&&(Math.abs(rdnum2-rdnum3)==1))||((Math.abs(rdnum1-rdnum3)==1)&&(Math.abs(rdnum2-rdnum3)==1))||((Math.abs(rdnum1-rdnum2)==1)&&(Math.abs(rdnum1-rdnum3)==1)))){
            moneyLeft.textContent=Number(money.textContent)+800;
            message.textContent="You Were Lucky This Time You Got 800 INR numbers are in sequence with difference of 1 in any order";
        }
        else{
            message.textContent="You Were Not Lucky This Time";
        }
    } 
    })
function numberselect(){
    var arr=[]
    for(var i=0;i<3;i++){
      numbers=randomNumbers();
      arr.push(numbers);  
    }
    return arr;
}
function randomNumbers(){
   var random= Math.floor(Math.random()*9);
   return random;
}