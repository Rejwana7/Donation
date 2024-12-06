// console.log("connect")
// noakhali
document.getElementById('noakhali-donate')
.addEventListener("click",function(){
    // console.log("noakhali donation btn")
const donateAmount= InputValueById("input-noakhali")
// console.log(donateAmount);
if(isNaN(donateAmount) || donateAmount<0){
    alert("Please Enter a valid Donation amount");
    return;
}
const amountNoakhali= getTextFieldValueById("noakhali-amount")

const totalDonateAmount= amountNoakhali+donateAmount;
document.getElementById("noakhali-amount").innerText= totalDonateAmount.toFixed(3);
const mainBalance= getTextFieldValueById("main-balance")
const updateBalance= mainBalance-donateAmount;
document.getElementById("main-balance").innerText=updateBalance.toFixed(3);
if(donateAmount > mainBalance){
    alert("Insufficient balance to Donate");
    return;
}
document.getElementById("input-noakhali").value=""
my_modal_1.showModal()
const historyTitle=getInnerText("noakhali-title")
// console.log(historyTitle);
history(donateAmount,historyTitle);
document.getElementById("history-title").classList.remove('hidden')
document.getElementById("divider").classList.remove('hidden')
})

// feni


document.getElementById('feni-donate')
.addEventListener("click",function(){
    // console.log("noakhali donation btn")
const donateAmount= InputValueById("input-feni")
// console.log(donateAmount);
if(isNaN(donateAmount) || donateAmount<0){
    alert("Please Enter a valid Donation amount");
    return;
}
const amountFeni= getTextFieldValueById("feni-amount")

const totalDonateAmount= amountFeni+donateAmount;
document.getElementById("feni-amount").innerText= totalDonateAmount.toFixed(3);
const mainBalance= getTextFieldValueById("main-balance")
const updateBalance= mainBalance-donateAmount;
document.getElementById("main-balance").innerText=updateBalance.toFixed(3);
if(donateAmount > mainBalance){
    alert("Insufficient balance to Donate");
    return;
}
document.getElementById("input-feni").value=""
my_modal_1.showModal();
const historyTitle=getInnerText("title-feni");
// console.log(historyTitle);
history(donateAmount,historyTitle);
document.getElementById("history-title").classList.remove('hidden')
document.getElementById("divider").classList.remove('hidden')

})

// quota


document.getElementById('quota-donate')
.addEventListener("click",function(){
    // console.log("noakhali donation btn")
const donateAmount= InputValueById("input-quota")
// console.log(donateAmount);
if(isNaN(donateAmount) || donateAmount<0){
    alert("Please Enter a valid Donation amount");
    return;
}
const amountquota= getTextFieldValueById("quota-amount")

const totalDonateAmount= amountquota+donateAmount;
document.getElementById("quota-amount").innerText= totalDonateAmount.toFixed(3);
const mainBalance= getTextFieldValueById("main-balance")
const updateBalance= mainBalance-donateAmount;
document.getElementById("main-balance").innerText=updateBalance.toFixed(3);
if(donateAmount > mainBalance){
    alert("Insufficient balance to Donate");
    return;
}
document.getElementById("input-quota").value=""
my_modal_1.showModal()
const historyTitle=getInnerText("quota-title")
// console.log(historyTitle);
history(donateAmount,historyTitle);
document.getElementById("history-title").classList.remove('hidden')
document.getElementById("divider").classList.remove('hidden')


})


// history tab functionality

const donationTab= document.getElementById('donation-btn')
const historyTab=document.getElementById('history-btn')
const historyTitle=document.getElementById('history-title')

historyTab.addEventListener("click",function(){
   switchTab(historyTab,donationTab,'card-section','history-section')

  
})

donationTab.addEventListener("click",function(){
    switchTab(donationTab,historyTab,'history-section','card-section')
 })

//  document.getElementById("blog-btn-desktop")
//  .addEventListener("click",function(){
//     window.location.href="./blog.html"
//  })


//  document.getElementById("blog-btn-mobile")
//  .addEventListener("click",function(){
//     window.location.href="./blog.html"
//  })
