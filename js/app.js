document.addEventListener("DOMContentLoaded", function(event) { 
    totalElementPrice();
});
function elemet(hitFromButton){
    if(hitFromButton=='Extra-Memory-btn'){
        const extraMemoryCost=document.getElementById('extra_memory_cost').innerText=180;
    }
    else if(hitFromButton=='Memory-btn'){
        const extraMemoryCost=document.getElementById('extra_memory_cost').innerText=0;
    }
    else if(hitFromButton=='storage-btn'){
        const extraStorageCost=document.getElementById('extra-storage-cost').innerText=0;
    }
    else if(hitFromButton=='extra-storage-btn'){
        const extraStorageCost=document.getElementById('extra-storage-cost').innerText=100;
    }
    else if(hitFromButton=='over-extra-storage-btn'){
        const extraStorageCost=document.getElementById('extra-storage-cost').innerText=180;
    }
    else if(hitFromButton=='normal-delivery'){
        const extraDeliveryCharge=document.getElementById('extra-delivery-charge').innerText=0;
    }
    else if(hitFromButton=='delivery-charge'){
        const extraDeliveryCharge=document.getElementById('extra-delivery-charge').innerText=20;
    }
    totalElementPrice();
}

function totalElementPrice(){
    let allElementPrice=document.getElementsByClassName('price');
    let totalPrice=0;
    let PromoTotalPrice=0;
    for(const element of allElementPrice){

        let singlePrice=element.innerText;
        totalPrice=parseInt(totalPrice) +parseInt(singlePrice) ;
        PromoTotalPrice=parseInt(PromoTotalPrice) +parseInt(singlePrice) ;
    }
   document.getElementById('total-price').innerText=totalPrice;
   document.getElementById('promo-total-price').innerText=PromoTotalPrice;
   document.getElementById('promo-success').classList.add('d-lg-none');
   document.getElementById('promo-fail').classList.add('d-lg-none');
return PromoTotalPrice;
   
}

function PromoCodeDiscount(){
    var totalPrice=totalElementPrice();
    var promoCodeElement=document.getElementById('promo-code');
    var promoCode=promoCodeElement.value;

    if(promoCode =='stevekaku'){
        PromoTotalPrice=totalPrice-((totalPrice/100)*20);
        console.log(document.getElementById('promo-total-price'));
         document.getElementById('promo-total-price').innerText=PromoTotalPrice;
         document.getElementById('promo-success').classList.remove("d-lg-none");

    }
    else{
        document.getElementById('promo-fail').classList.remove("d-lg-none");

    }
    promoCodeElement.value='';
}

document.getElementById('Extra-Memory-btn').addEventListener('click',function(){
    elemet("Extra-Memory-btn");
});
document.getElementById('Memory-btn').addEventListener('click',function(){
    elemet("Memory-btn");
});
document.getElementById('storage-btn').addEventListener('click',function(){
    elemet("storage-btn");
});
document.getElementById('extra-storage-btn').addEventListener('click',function(){
    elemet("extra-storage-btn");
});
document.getElementById('over-extra-storage-btn').addEventListener('click',function(){
    elemet("over-extra-storage-btn");
});
document.getElementById('normal-delivery').addEventListener('click',function(){
    elemet("normal-delivery");
});
document.getElementById('delivery-charge').addEventListener('click',function(){
    elemet("delivery-charge");
});

document.getElementById('promo-code-btn').addEventListener('click',function(){
    PromoCodeDiscount();
});
