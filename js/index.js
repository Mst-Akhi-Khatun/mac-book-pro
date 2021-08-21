// get elements
const bestAmount = document.getElementById("best-amount");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCharge = document.getElementById("delivery-charge");
const subTotal = document.getElementById("total-amount");
const total = document.getElementById("grand-total");
const codeField = document.getElementById("input-field");

// Update Memory Amount
function updateMemoryCost(amount) {
    memoryCost.innerText = amount;
    updateSubTotal();
    updateGrandTotal();
}

// Update Storage Amount
function updateStorageCost(amount) {
    storageCost.innerText = amount;
    updateSubTotal();
    updateGrandTotal();
}

// Update Shipping Cost
function updateDeliveryCharge(amount) {
    deliveryCharge.innerText = amount;
    updateSubTotal();
    updateGrandTotal();
}

// Getting Total Amounts
function addAllPrices() {
    const totalAmount = Number(bestAmount.innerText) + Number(memoryCost.innerText) + Number(storageCost.innerText) + Number(deliveryCharge.innerText);
    return totalAmount;
}

// Update Total Amount
function updateSubTotal() {
    subTotal.innerText = addAllPrices();
}

// Update GrandTotal Amount
function updateGrandTotal() {
    total.innerText = addAllPrices();
}

// Using Promo-Code
document.getElementById('code-btn').addEventListener('click', function() {
    const promoCode ="stevekaku";  // code
    const discount = (subTotal.innerText * 20) / 100; // discount
    if (codeField.value.toLowerCase() == promoCode.toLocaleLowerCase()) {
        total.innerText = subTotal.innerText - discount;
    }
    // clear input Value
    codeField.value = '';
})
