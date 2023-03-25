const caseId = document.getElementById("case-number-field");
const phoneId = document.getElementById("phone-number-field");
const phoneTotal = document.getElementById("phone-total");
const caseTotal = document.getElementById("case-total");

function setTextById(id, value){
    document.getElementById(id).innerText = value;
}
function btnIncDec(btnId, proId, proTotal, state, price){
    document.getElementById(btnId).addEventListener('click', function(){
        const proQuant = parseFloat(proId.value);
        if(state){
            proId.value = proQuant + 1;
        } else{
            proId.value = proQuant - 1;
        }
        proTotal.innerText = price * proId.value;
        
        const subTotalString = parseFloat(phoneTotal.innerText) + parseFloat(caseTotal.innerText);
        const subTotalValue = parseFloat(subTotalString);
        setTextById("sub-total", subTotalValue)

        const tax = (subTotalValue * 0.1).toFixed(2);
        setTextById("tax-amount", tax)

        const totalValue = subTotalValue - tax;
        setTextById("final-total", totalValue)
    })
}