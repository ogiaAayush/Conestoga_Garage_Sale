const regFullName = /^[a-zA-Z\s]+\s[a-zA-Z\s]+$/;
const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regCCNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/
const regCCExpiryMonth = /^[A-Za-z]{3}$/
const regCCExpiryYear = /^\d{4}$/
const regQuantity = /^\d+$/

function checkoutSubmit()
{
    let fLName = document.getElementById("fullName").value;
    let customerEmail = document.getElementById("Email").value;
    let creditNumber = document.getElementById("cCNumber").value;
    let creditExpiryMonth = document.getElementById("cCExpiryMonth").value;
    let creditExpiryYear = document.getElementById("cCExpiryYear").value;
    let quantity = document.getElementById("purQuantity").value;

    var itemQuant1 = document.getElementsByName('waterBottlesQuantity');
    var inputValue1 = itemQuant1[0].value;
    var itemQuant2 = document.getElementsByName("capsQuantity");
    var inputValue2 = itemQuant2[0].value;
    var itemQuant3 = document.getElementsByName("pensQuantity");
    var inputValue3 = itemQuant3[0].value;
    var itemQuant4 = document.getElementsByName("candyBagsQuantity");
    var inputValue4 = itemQuant4[0].value;
    var itemQuant5 = document.getElementsByName("cupCakesQuantity");
    var inputValue5 = itemQuant5[0].value;

    var item1 = "Water Bottles";
    var item2 = "Caps";
    var item3 = "Pens";
    var item4 = "Candy Bags";
    var item5 = "Cup Cakes";

    var unitPrice1 = "$5";
    var unitPrice2 = "$20";
    var unitPrice3 = "$2";
    var unitPrice4 = "$10";
    var unitPrice5 = "$3";

    var totalPrice1 =inputValue1 * 5;
    var totalPrice2 =inputValue2 * 20;
    var totalPrice3 =inputValue3 * 2;
    var totalPrice4 =inputValue4 * 10;
    var totalPrice5 =inputValue5 * 3;
    
    document.getElementById("customerName").innerHTML = `${fLName}`;
    document.getElementById("customerEmail").innerHTML = `${customerEmail}`;
    const last4Digits = creditNumber.substr(creditNumber.length - 4);
    document.getElementById("customerCCNumber").innerHTML = `xxxx-xxxx-xxxx- ${last4Digits}`;

    var form = document.getElementById("garageSaleInfo");

    var receipt = document.getElementById("receiptTable");

    if(fLName == "" || customerEmail == "" || creditNumber == "" || creditExpiryMonth == "" || creditExpiryYear == "" || quantity == "")
    {
        receipt.style.display = "none";
        form.style.display = "block";
    }

    else
    {
        receipt.style.display = "block";
        form.style.display = "none";
    }
    
    const validation = [];    

    if(!regFullName.test(fLName))
    {
        validation.push("Invalid Input!!!, Please enter a valid Name");
    }

    if(!regEmail.test(customerEmail))
    {
        validation.push("Invalid Input!!!, Please enter a valid Email");
    }

    if(!regCCNumber.test(creditNumber))
    {
        validation.push("Invalid Input!!!, Please enter a valid Card Number");
    }

    if(!regCCExpiryMonth.test(creditExpiryMonth))
    {
        validation.push("Invalid Input!!!, Please enter a valid Month");
    }

    if(!regCCExpiryYear.test(creditExpiryYear))
    {
        validation.push("Invalid Input!!!, Please enter a valid Year");
    }

    if(!regQuantity.test(quantity))
    {
        validation.push("Invalid Input!!!, Please enter a valid Quantity");
    }

    const quantities = [];

    for(let i = 0; i < quantities.length; i++)
    {
        const quantityItems = parseInt(quantity[i].value);  

        if (isNaN(quantityItems) || quantityItems < 0) 
        {
            errors.push('Please enter a valid quantity for all items.');
            
            break;
        }
      
          quantities.push(quantityItems);
    }

    var donationPrice = Math.max(10, ((totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4 + totalPrice5) * 0.1));
    var grandTotal = (totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4 + totalPrice5) + donationPrice;

    document.getElementById("minDonation").innerHTML = `$${donationPrice.toFixed(2)}`;
    document.getElementById("grandTotalPrice").innerHTML = `$${grandTotal.toFixed(2)}`;
    

    if(totalPrice1 > 0)
    {
        document.getElementById("totalPrice1").innerHTML = `$${totalPrice1.toFixed(2)}`;
        document.getElementById("quantity1").innerHTML = `${inputValue1}`;
        document.getElementById("itemName1").innerHTML = `${item1}`;
        document.getElementById("unitPrice1").innerHTML = `${unitPrice1}`;      
    }

    if(totalPrice2 > 0)
    {
        document.getElementById("totalPrice2").innerHTML = `$${totalPrice2.toFixed(2)}`;
        document.getElementById("quantity2").innerHTML = `${inputValue2}`;
        document.getElementById("itemName2").innerHTML = `${item2}`;
        document.getElementById("unitPrice2").innerHTML = `${unitPrice2}`;
    }

    if(totalPrice3 > 0)
    {
        document.getElementById("totalPrice3").innerHTML = `$${totalPrice3.toFixed(2)}`;
        document.getElementById("quantity3").innerHTML = `${inputValue3}`;
        document.getElementById("itemName3").innerHTML = `${item3}`;
        document.getElementById("unitPrice3").innerHTML = `${unitPrice3}`;
    }

    if(totalPrice4 > 0)
    {
        document.getElementById("totalPrice4").innerHTML = `$${totalPrice4.toFixed(2)}`;
        document.getElementById("quantity4").innerHTML = `${inputValue4}`;
        document.getElementById("itemName4").innerHTML = `${item4}`;
        document.getElementById("unitPrice4").innerHTML = `${unitPrice4}`;
    }

    if(totalPrice5 > 0)
    {
        document.getElementById("totalPrice5").innerHTML = `$${totalPrice5.toFixed(2)}`;
        document.getElementById("quantity5").innerHTML = `${inputValue5}`;
        document.getElementById("itemName5").innerHTML = `${item5}`;
        document.getElementById("unitPrice5").innerHTML = `${unitPrice5}`;
    }

    if(validation.length > 0)
    {
        var error = validation.join("<br><br>");

        document.getElementById("errorStrings").innerHTML = `${error}`;
    }
    else
    {
        document.getElementById("errorStrings").innerHTML = ``;
    }

    return false;
}