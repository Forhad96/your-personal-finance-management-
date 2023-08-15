// Selecting necessary field

const depositFieldContainer = document.getElementById('deposit');

// deposit input and button
const depositBtn = depositFieldContainer.children[2];
const depositField = depositFieldContainer.children[1];

// deposit total amount display
const depositTotalAmount= document.getElementById("deposit_total");

//  total amount of your account display
const totalBalance = document.getElementById('Total_balance');

// deposit event
depositBtn.addEventListener('click',function(){

// get deposit amount for deposit input field
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

//after deposit clear  depositField
depositField.value = '' 
depositField.focus()

// check input number or string
if(isNaN(newDepositAmount)){
    alert('Please Input Valid Number!!!');
    return;
}

// update deposit amount 
const previousDepositTotalString = depositTotalAmount.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

const currentDepositTotal = previousDepositTotal + newDepositAmount;

depositTotalAmount.innerText = currentDepositTotal;

// update Total balance

const previousTotalBalanceString = totalBalance.innerText;
const previousTotalBalance = parseFloat(previousTotalBalanceString);

const newTotalBalance = previousTotalBalance + newDepositAmount;

totalBalance.innerText = newTotalBalance;






    
})