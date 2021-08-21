
const bestPrice = document.getElementById("best-price");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalPrice = document.getElementById("total-price");
const grandTotal = document.getElementById("grand-total");
const inpuField = document.getElementById("code-field");

// Updating Memory Price
function updateMemoryPrice(amount) {
    memoryCost.innerText = amount;
    updateTotal();
    updateGrandTotal();
}

// Updating Storage Price
function updateStoragePrice(amount) {
    storageCost.innerText = amount;
    updateTotal();
    updateGrandTotal();
}

// Updating Delivery Cost
function updateDeliveryCost(amount) {
    deliveryCost.innerText = amount;
    updateTotal();
    updateGrandTotal();
}

// Updating Total Price
function updateTotal() {
    totalPrice.innerText = Number(bestPrice.innerText) + Number(memoryCost.innerText) + Number(storageCost.innerText) + Number(deliveryCost.innerText);
}

// Updating Grand Total Price
function updateGrandTotal() {
    grandTotal.innerText = Number(bestPrice.innerText) + Number(memoryCost.innerText) + Number(storageCost.innerText) + Number(deliveryCost.innerText);
}

// Updating Grand Total Price Using Promo-Code
document.getElementById('promo-btn').addEventListener('click', function() {
    const promoCode ="stevekaku";  //promo code
    const discount = (totalPrice.innerText * 20) / 100; // getting discount
    if (inpuField.value.toLowerCase() == promoCode.toLocaleLowerCase()) {
        grandTotal.innerText = totalPrice.innerText - discount;
    }
    // clear input field
    inpuField.value = '';
})
