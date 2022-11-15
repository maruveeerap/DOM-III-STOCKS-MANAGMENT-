document.querySelector("form").addEventListener("submit", stocks)
function stocks(event) {
    event.preventDefault()
    
    let bag1="";

    let input_1 = document.querySelector("#compName").value
    let input_2 = document.querySelector("#listedExchange").value
    let input_3 = document.querySelector("#industry").value
    let input_4 = document.querySelector("#stockPrice").value
    let input_5 = document.querySelector("#quantity").value
    let input_6 = document.querySelector("#type").value

    console.log(input_1, input_2, input_3, input_4, input_5, input_6);
    let tRow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = input_1

    let td2 = document.createElement("td");
    td2.innerText = input_2

    let td3 = document.createElement("td");
    td3.innerText = input_3

    let td4 = document.createElement("td");
    td4.innerText = input_4

    let td5 = document.createElement("td");
    td5.innerText = input_5

    let td6 = document.createElement("td");
    td6.innerText = input_6

    let td7 = document.createElement("td");
    let total_price = (input_4 * input_5)
    td7.innerText = total_price

    let td8 =document.createElement("td");
    td8.innerText= "date"
    



    td9 = document.createElement("td");
    td9.innerText = "Sell"
    td9.style.backgroundColor = "red"
    td9.addEventListener("click",deleteList)

    tRow.append(td1, td2, td3, td4, td5, td6, td7,td8, td9);


    document.querySelector("#compName").value =" "
    document.querySelector("#listedExchange").value =" "
    document.querySelector("#industry").value =" "
    document.querySelector("#stockPrice").value =" "
    document.querySelector("#quantity").value =" "
    document.querySelector("#type").value =" "
    
    bag1=bag1+total_price
    document.querySelector("#totalPortfolio").innerText  = bag1;
    

   
    let count=0;
    if(input_1 == "" || input_2 == "" || input_3 == "" ||input_4 == "" || input_5 == "" || input_6 == "") {
        alert ("Error : Please fill all the fields before Adding in Portfolio!")
    }
    else {
        document.querySelector("tbody").append(tRow)
    
        count++;
    }
    
    document.querySelector("#noOfStock").innerText  = count;


}

function deleteList(event){
    event.target.parentNode.remove()

}
