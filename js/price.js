function getValueByElementId(elementId,priceId){
    //add in cart
    const id=document.getElementById(elementId);
    const idValue=id.innerText;
    const ol=document.getElementById('ol');
    const li=document.createElement('li');
    li.innerText=idValue;
    ol.appendChild(li);
    const price=document.getElementById(priceId);
    const priceValue= parseFloat(price.innerText);
    return priceValue;
}

function priceSum(price){
    const priceValue = document.getElementById('total-price');
    const priceYalueValue=parseFloat(priceValue.innerText);
    const totalPrice=parseFloat(price)+priceYalueValue;
    priceValue.innerText=totalPrice.toFixed(2);
    if(totalPrice>0){
        const tp=document.getElementById('no-item-selected');
        tp.innerText='';
    }
}
//kitchenware
document.getElementById('kitchenware-1').addEventListener('click',function(){
    const price=getValueByElementId('kitchenware-1-title','kitchenware-1-price');
    priceSum(price);
})

document.getElementById('kitchenware-2').addEventListener('click',function(){
    const price=getValueByElementId('kitchenware-2-title','kitchenware-2-price');
    priceSum(price);
})

document.getElementById('kitchenware-3').addEventListener('click',function(){
    const price=getValueByElementId('kitchenware-3-title','kitchenware-3-price');
    priceSum(price);
})
 
//sportswear
document.getElementById('sportswear-1').addEventListener('click',function(){
    const price=getValueByElementId('sportswear-1-title','sportswear-1-price');
    priceSum(price);
})
 

document.getElementById('sportswear-2').addEventListener('click',function(){
    const price=getValueByElementId('sportswear-2-title','sportswear-2-price');
    priceSum(price);
})
 

document.getElementById('sportswear-3').addEventListener('click',function(){
    const price=getValueByElementId('sportswear-3-title','sportswear-3-price');
    priceSum(price);
})
 
//furniture
document.getElementById('furniture-1').addEventListener('click',function(){
    const price=getValueByElementId('furniture-1-title','furniture-1-price');
    priceSum(price);
})
 
document.getElementById('furniture-2').addEventListener('click',function(){
    const price=getValueByElementId('furniture-2-title','furniture-2-price');
    priceSum(price);
})
 
document.getElementById('furniture-3').addEventListener('click',function(){
    const price=getValueByElementId('furniture-3-title','furniture-3-price');
    priceSum(price);
})
 