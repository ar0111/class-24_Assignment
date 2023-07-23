//getInput
function getInput(inputID){
    const inputField = document.getElementById(inputID);
    const inputValue = inputField.value;
    const inputAmount = parseFloat(inputValue);

    inputField.value = ''; 
    return inputAmount;
}

//previous Value
function previousValue(previousAmount){
    const previousField = document.getElementById(previousAmount);
    const previousValue = previousField.innerText;
    const previousNumberAmount = parseFloat(previousValue);

   return previousNumberAmount;
}

function updateAmount(updateID, inputAmount, previousAmount, balance, isAdded){
    const updateField = document.getElementById(updateID);
    const newAmount = inputAmount + previousAmount;
    updateField.innerText = newAmount;
    if(isAdded == true){
        const newBalance = inputAmount + balance;
        document.getElementById('balance-amount').innerText = newBalance;
    }else{
        const newBalance = balance - inputAmount;
        document.getElementById('balance-amount').innerText = newBalance;
    }
     
}

document.getElementById('deposite-btn').addEventListener('click', function(){
    const inputDepositeAmount = getInput('deposite-field'); 
    if(isNaN(inputDepositeAmount)){
        alert("Please Enter a Valid Number");
    }else{
        const previousDepositeAmount = previousValue('deposite-amount');
        const currentBalance = previousValue('balance-amount');
    
        updateAmount('deposite-amount', inputDepositeAmount, previousDepositeAmount, currentBalance, true);
    }

})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const inputwithdrawAmount = getInput('withdraw-field'); 
    if(isNaN(inputwithdrawAmount)){
        alert("Please Enter a Valid Number");
    }else{
        const previousWithdrawAmount = previousValue('withdraw-amount');
        const currentBalance = previousValue('balance-amount');

        if(inputwithdrawAmount > currentBalance){
            alert("Not Have Sufficient Balance");
        }else{
            updateAmount('withdraw-amount', inputwithdrawAmount, previousWithdrawAmount, currentBalance, false);
        }
    }
})


