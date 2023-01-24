var amount ;
var tip;
var person;
var resetCount = 0;
function billAmount(){
    var target = document.getElementById("input-id-1");
    var value = parseFloat(target.value);
    target.style.backgroundColor="#9C60FF";
    amount=value;
    console.log(amount);
}

function tipSelect(element){
    for(var i=0; i<=6; i++){
    document.getElementById("tipSelect").children[i].style.backgroundColor="white";
    }
    element.style.backgroundColor="#C4BEBD";
    var current_tip = element.value;
    console.log("current_tip",current_tip);
    tip = current_tip;
}

function setPeople(element){
    clickButton = element.value;
    if(clickButton == "+"){
        console.log("+ button is pressed");
        var target = document.getElementById("peopleCount");
        var value = target.value;//extract value in 'value' field of input tag 0,1,2,3 ... etc.
        var increment=parseInt(value)+1;
        var setCount = target.setAttribute("value",increment);
        person=target.value;//new value
        console.log(person);
    }
    else{
        console.log("- button is pressed");
        var target = document.getElementById("peopleCount");
        var value = target.value;//extract value in 'value' field of input tag
        var decrement=parseInt(value)-1;
        if(decrement>=0){
        var setCount = target.setAttribute("value",decrement);
        person=target.value;//new value
        console.log("updated value: " + person)
         }
         else if(decrement==0){
            //if decrement = 0
            var setCount = target.setAttribute("value",decrement);
            person=target.value;//new value
            console.log("updated value: " + person)
         }
    }
}

function chargesCalc(){
    console.log(tip,amount,person);
    if(tip!=undefined && amount!=undefined &&person !=undefined && person !=0){
        var total_tip = ((tip/100)*amount)/person;
        var total_amount = parseFloat(((amount/person)+ total_tip));
        document.getElementById("charges_tip").innerText=total_tip;
        document.getElementById("charges_bill").innerText=total_amount;
        if(resetCount==0){
            //if no reset button then only create.
        const reset_button = document.createElement("input");
        reset_button.setAttribute("id", "reset");
        reset_button.setAttribute("onclick", "resetCharges()");
        reset_button.setAttribute("type", "button");
        reset_button.setAttribute("value", "reset");
        document.getElementById("class_add").appendChild(reset_button);
        resetCount +=1;
        }
    }
}

function resetCharges() {
    location.reload();    
}
