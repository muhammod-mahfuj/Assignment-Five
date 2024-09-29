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

        if(isNaN(inputValue)) {
            alert("Please type digit for donate")
            return;
        }
        if( inputValue <= 0 ){
            alert("Please type proper digit for donate")
            return;
        }
            let totalDonation =nMoneyNum + inputValue;
    
            let totalAmount = myTotalAmount('myamount');

            if( totalAmount < inputValue) {
                alert("you don't have enough money. please check your balance");
                return;
            }
        
            document.getElementById("NCoin").innerText = totalDonation; 
        
            document.getElementById('myamount').innerText = totalAmount - inputValue;

            alert(`you have addded ${inputValue} tk for Nowakali flood affected people `);


            let p = document.createElement("p");
            let span = document.createElement("span");
            span.innerText = `Date : ${new Date()}`;
            p.innerText = `Added ${inputValue} taka Donate for Flood at Noakhali, Bangladesh. Total amount is now ${totalDonation} `;
            document.getElementById("transection-container").append(p, span);
        
        
    
 });

 document.querySelector("#donateBtn2").addEventListener("click", function(e) {
    e.preventDefault();

    let inputValue= InputFieldValue("feniFlood");

    let nMoneyNum = coinFieldText("FCoin");

    if(isNaN(inputValue)) {
        alert("Please type digit for donate")
        return;
    }
    if( inputValue <= 0 ){
        alert("Please type proper digit for donate")
        return;
    }

        let totalAmount = myTotalAmount('myamount');

        if( totalAmount < inputValue) {
            alert("you don't have enough money. please check your balance");
            return;
        }
        let totalDonation =nMoneyNum + inputValue;
    
        document.getElementById("FCoin").innerText = totalDonation; 
    
        document.getElementById('myamount').innerText = totalAmount - inputValue;

        alert(`you have addded ${inputValue} tk for feni flood affected people `)
        
        let p = document.createElement("p");
        let span = document.createElement("span");
        span.innerText = `Date : ${new Date()}`;
        p.innerText = `Added ${inputValue} taka Donate for Flood Relief in Feni,Bangladesh. Total amount is now ${totalDonation} `;
        document.getElementById("transection-container").append(p, span);

   
   
});

document.querySelector("#donateBtn3").addEventListener("click", function(e) {
    e.preventDefault();

    let inputValue= InputFieldValue("qutaFlood");

    let nMoneyNum = coinFieldText("QCoin");

    if(isNaN(inputValue) ) {
        alert("Please type digit for donate")
        return;
    }
    if( inputValue <= 0 ){
        alert("Please type proper digit for donate")
        return;
    }
        let totalAmount = myTotalAmount('myamount');
        
        if( totalAmount < inputValue) {
            alert("you don't have enough money. please check your balance");
            return;
        }

        let totalDonation =nMoneyNum + inputValue;
    
        document.getElementById("QCoin").innerText = totalDonation; 
    
        document.getElementById('myamount').innerText = totalAmount - inputValue;

        alert(`you have addded ${inputValue} tk for  quta protested people's aids `)
    
        let p = document.createElement("p");
        let span = document.createElement("span");
        span.innerText = `Date : ${new Date()}`;
        p.innerText = ` ${inputValue} taka's Aid for Injured in the Quota Movement. Total amount is now ${totalDonation} `;
        document.getElementById("transection-container").append(p, span);
});

document.getElementById('donation').addEventListener("click", function () {
    this.classList.add('btn-success')
   showSection("cards");
});
document.getElementById('history').addEventListener("click", function () {
    this.classList.add('btn-success')
    showSection("tranjection-history");
 });