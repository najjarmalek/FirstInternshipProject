let cartButton = document.querySelector("#cart-btn");
let cart = document.querySelector(".cart");
let closeCart =document.querySelector("#close-cart");

cartButton.onclick=() =>{
    cart.classList.add("active");
};

closeCart.onclick = () =>{
    cart.classList.remove("active");
};


if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);
} else {
    ready();
}

function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons);
    for (var i = 0; i<removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    } 
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i = 0; i<removeCartButtons.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantitychanged);

    }
    var addCart = document.getElementsByClassName("button");
    for(var i = 0; i<addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}





function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}
