document.getElementById('coupon-field').addEventListener('keyup',function(event){
    const couponField=document.getElementById('coupon-field');
    const couponFieldValue=couponField.value;
    if(couponFieldValue==='SELL200'){
        const applyBtn=document.getElementById('apply');
        applyBtn.disabled=false;
    }else {
        const applyBtn=document.getElementById('apply');
        applyBtn.disabled=true;
    }
})

document.getElementById('apply').addEventListener('click',function(event){
    const totalPrice=document.getElementById('total-price');
    const totalPriceValue=parseFloat(totalPrice.innerText);
    const discount=document.getElementById('discount');
    const discountValue=parseFloat(discount.innerText);
    const discountAmount=totalPriceValue*(0.2);
    discount.innerText=discountAmount.toFixed(2);
    const total=document.getElementById('total');
    const discountPrice=totalPriceValue-discountAmount;
    total.innerText=discountPrice.toFixed(2);
})