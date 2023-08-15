// Selecting necessary field

const depositFieldContainer = document.getElementById('deposit');
const withdrawFieldContainer = document.getElementById('withdraw');

// deposit input and button
const depositField = depositFieldContainer.children[1];
const depositBtn = depositFieldContainer.children[2];

// deposit input and button
const withdrawField = withdrawFieldContainer.children[1];
const withdrawBtn = withdrawFieldContainer.children[2];

// deposit total amount display
const depositTotalAmount= document.getElementById("deposit_total");

// withdraw total amount display
const withdrawTotalAmount= document.getElementById("withdraw_total");



//  total amount of your account display
const totalBalance = document.getElementById('Total_balance');

//! deposit event button
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

//! withdraw event button

withdrawBtn.addEventListener("click",function(){
// get withdraw amount for deposit input field
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//after deposit clear  depositField
withdrawField.value = '' 
withdrawField.focus()

// check input number or string
if(isNaN(newWithdrawAmount)){
    alert('Please Input Valid Number!!!');
    return;
}

// update withdraw amount 
const previousWithdrawTotalString = withdrawTotalAmount.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

const newWithdrawTotal =previousWithdrawTotal + newWithdrawAmount;
withdrawTotalAmount.innerText = newWithdrawTotal;

// update Total balance
const previousTotalBalanceString = totalBalance.innerText;
const previousTotalBalance = parseFloat(previousTotalBalanceString);

if(previousTotalBalance < newWithdrawAmount){
    alert("Your haven't enough money!!!");
    return;
}

const newTotalBalance = previousTotalBalance - newWithdrawAmount;

totalBalance.innerText = newTotalBalance;



})