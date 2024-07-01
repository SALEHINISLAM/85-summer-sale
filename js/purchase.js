document.getElementById('purchase').addEventListener('click',function(){
    const totalPrice=document.getElementById('total-price');
    totalPrice.innerText='00.00';
    const discount=document.getElementById('discount');
    discount.innerText='00.00';
    const total=document.getElementById('total');
    total.innerText='00.00';
    const couponField=document.getElementById('coupon-field');
    couponField.value='';
    const applyBtn=document.getElementById('apply');
    applyBtn.disabled=true;
})