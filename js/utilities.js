 console.log("utilities added");

 function InputFieldValue (id) {
    let inputText = document.getElementById(id).value ;
    let value = parseFloat(inputText);

    return value;
 }

 function coinFieldText (id) {
    let amountStr = document.getElementById(id).innerText;
    let amountNum =  parseFloat(amountStr);

    return amountNum;
 }

 function myTotalAmount (id) {
   let amountStr = document.getElementById(id).innerText;
   let amountNum =  parseFloat(amountStr);

   return amountNum;
}

function showSection (id) {
   document.getElementById('cards').classList.add('hidden');
   document.getElementById('tranjection-history').classList.add('hidden');


   document.getElementById(id).classList.remove('hidden');
}