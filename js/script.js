console.log("script is added");

window.onscroll = function() {scrollBar()}

 let header = document.getElementById("header");
 var sticky = header.offsetTop;

  function scrollBar () {
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }else {
        header.classList.remove("sticky")
    }
 }

 

 document.querySelector("#donateBtn").addEventListener("click", function(e) {
    e.preventDefault();

    let inputValue= InputFieldValue("nowakaliFlood");

    let nMoneyNum = coinFieldText("NCoin");

    let totalAmount = myTotalAmount('myamount');

    document.getElementById("NCoin").innerText = nMoneyNum + inputValue; 

    document.getElementById('myamount').innerText = totalAmount - inputValue;

 });

 document.querySelector("#donateBtn2").addEventListener("click", function(e) {
    e.preventDefault();

    let inputValue= InputFieldValue("feniFlood");

    let nMoneyNum = coinFieldText("FCoin");
    let totalAmount = myTotalAmount('myamount');



    document.getElementById("FCoin").innerText = nMoneyNum + inputValue; 

    document.getElementById('myamount').innerText = totalAmount - inputValue;

   
});

document.querySelector("#donateBtn3").addEventListener("click", function(e) {
    e.preventDefault();

    let inputValue= InputFieldValue("qutaFlood");

    let nMoneyNum = coinFieldText("QCoin");

    let totalAmount = myTotalAmount('myamount');



    document.getElementById("QCoin").innerText = nMoneyNum + inputValue; 

    document.getElementById('myamount').innerText = totalAmount - inputValue;

   
})