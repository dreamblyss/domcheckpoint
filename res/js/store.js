

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else{
    ready();
}


function ready(){

        
/*alert("Hello!, Welcome To Our Store");*/

//select all buttons with the document-danger class
var removeCartItemButtons = '';
removeCartItemButtons = document.getElementsByClassName('btn-danger');
//console.log(removeCartItemButtons);

for(var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
       // console.log('clicked');
    
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
        for(var i = 0; i < quantityInputs.length; i++){

                var input = quantityInputs[i];
                input.addEventListener('change', quantityChanged)
        }

        var addToCartButtons = document.getElementsByClassName('shop-item-button');
            for(var i = 0; i < addToCartButtons.length; i++){
                
                var button = addToCartButtons[i];
                button.addEventListener('click', addToCartClicked);
            
            }
}


function removeCartItem(event){

        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
}

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(title, price, imageSrc);
    addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc){

    var cartRow = document.createElement('div');
    //cartRow.innerText = title;
    var cartItems = document.getElementByClassName('cart-items')[0];
    
    var cartRowContents = `
            
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="res/img/mike.jpg" width="100" height="100"
                ><span class="cart-item-title">Thriller Album</span>
            </div>

            <span class="cart-price cart-column">19.99</span>

            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
    
    `

    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow)
}

function quantityChanged(event){

    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
            input.value = 1;
    }
    updateCartTotal();
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');

    var total = 0;

    for(var i = 0; i < cartRows.length; i++){

        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        //console.log(priceElement, quantityElement);
       //var price = parseFloat(priceElement.innerText.replace('&#8358;', ''));
       var price = priceElement.innerText
       var quantity = quantityElement.value;
       total = total + (price * quantity);

    }  
        total = Math.round(total * 100) / 100;
       document.getElementsByClassName('cart-total-price')[0].innerText = '=N=' + total ;
}
 


