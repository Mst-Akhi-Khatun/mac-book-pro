// memory part
function memory8Gb() {
    const extraMemory = document.getElementById("extra-memory");
    extraMemory.innerText = Number(0); 
    totalPrice()   
}
function memory16Gb() {
    const extraMemory = document.getElementById("extra-memory");
    extraMemory.innerText = Number(180);
    totalPrice()    
}

document.getElementById("8gb-memory").addEventListener('click', function() {    
    memory8Gb();    
});
document.getElementById("16gb-memory").addEventListener('click', function() {    
    memory16Gb();    
});


// storage part

function ssd256() {
    const extraMemory = document.getElementById("extra-storage");
    extraMemory.innerText = Number(0);    
}
function ssd512() {
    const extraMemory = document.getElementById("extra-storage");
    extraMemory.innerText = Number(100);    
}
function ssd1Tb() {
    const extraMemory = document.getElementById("extra-storage");
    extraMemory.innerText = Number(180);    
}

document.getElementById("256-gb-ssd").addEventListener('click', function() {    
    ssd256();    
});
document.getElementById("512-gb-ssd").addEventListener('click', function() {    
    ssd512();    
});
document.getElementById("1tb-ssd").addEventListener('click', function() {    
    ssd1Tb();    
});


// delivery part

function deliveryCharge25() {
    const extraMemory = document.getElementById("delivery-charge");
    extraMemory.innerText = Number(0);    
}
function deliveryCharge21() {
    const extraMemory = document.getElementById("delivery-charge");
    extraMemory.innerText = Number(20);    
}

document.getElementById("aug-25").addEventListener('click', function() {    
    deliveryCharge25();    
});
document.getElementById("aug-21").addEventListener('click', function() {    
    deliveryCharge21();    
});

// total price
function totalPrice() {
    const totalPrice = document.getElementById("total-price");
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("extra-memory").innerText;
    const storagePrice = document.getElementById("extra-storage").innerText;
    const deliveryCharge = document.getElementById("delivery-charge").innerText;
    const totalPriceCount = Number(bestPrice + memoryPrice + storagePrice + deliveryCharge);
    totalPrice = totalPriceCount;
}
