function szamol(){
    const bodyweight=Number(document.getElementById('weight').value);
    const height=Number(document.getElementById('height').value);
    const result=((bodyweight/Math.pow(height,2))*10000).toFixed(1);
    const man=document.getElementById('man');
    const woman=document.getElementById('woman');
    const falseResult=document.getElementById('false');



    if(height<0||bodyweight<0||bodyweight==0||height==0||document.querySelectorAll('input[type="radio"]:checked').length == 0){
        falseResult.innerHTML="A testtömeg mező értéke nagyobb kell hogy legyen, mint 0 !"+"<br>"+"A testmagasság mező értéke nagyobb kell hogy legyen, mint 0 !"+"<br>"+"Kérem válasszon egy nemet!";
        falseResult.style.color="red";

        document.getElementById("result").innerHTML="";
    }


    if(bodyweight>0&&height>0&&man.checked){
    if(result<20.0){
        document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Alacsony testsúly";
        document.getElementById("result").style.color="red";
    } else if(result>=20.1 && result<=25.0){
        document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Ideális testsúly";
        document.getElementById("result").style.color="green";
    }else if(result>=25.1&& result<=30.0){
        document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Túlsúly";
        document.getElementById("result").style.color="black";
    } else if(result>=30.1 && result<=40.0){
        document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Elhízás";
        document.getElementById("result").style.color="red";
    } else if(result>=40.1&& result<=50.0){
        document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Kóros elhízás";
        document.getElementById("result").style.color="red";
    } else if(result>=50.1){
        document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Extrém elhízás";
        document.getElementById("result").style.color="red";
    } ;

    falseResult.innerHTML="";

   
    };
    

    // WOMAN

    if(bodyweight>0&&height>0&&woman.checked){
        if(result<18.6){
            document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Alacsony testsúly";
            document.getElementById("result").style.color="red";
        } else if(result>=18.71 && result<=23.8){
            document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Ideális testsúly";
            document.getElementById("result").style.color="green";
        }else if(result>=23.8&& result<=30.0){
            document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Túlsúly";
            document.getElementById("result").style.color="black";
        } else if(result>=30.1 && result<=40.0){
            document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Elhízás";
            document.getElementById("result").style.color="red";
        } else if(result>=40.1&& result<=50.0){
            document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Kóros elhízás";
            document.getElementById("result").style.color="red";
        } else if(result>=50.1){
            document.getElementById("result").innerHTML="<span style='color:black; font-weight:400; font-size:1.5rem;'>Az Ön eredménye:</span>"+"<br>"+result+"<br>"+" Extrém elhízás";
            document.getElementById("result").style.color="red";
        } ;

        falseResult.innerHTML="";
        };

    
};

window.onload=function(){
    document.getElementById('weight').focus();
};

