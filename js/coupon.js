document.getElementById('coupon-field').addEventListener('keyup',function(event){
    const couponField=document.getElementById('coupon-field');
    const couponFieldValue=couponField.value;
    // console.log(couponFieldValue);
    if(couponFieldValue==='SELL200'){
        const applyBtn=document.getElementById('apply');
        applyBtn.disabled=false;
        // applyBtn.removeAttribute('disabled');
        // console.log('ok');
    }else {
        const applyBtn=document.getElementById('apply');
        var attribute=applyBtn.getAttributeNames();
        // console.log(attribute);
        applyBtn.disabled=true;
        // applyBtn.setAttribute('disabled');
    }
})