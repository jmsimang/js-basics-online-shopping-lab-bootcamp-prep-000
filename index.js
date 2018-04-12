var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 100) + 1})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length == 0)
    return "Your shopping cart is empty."
  var message = "In your cart, you have "
  for (var key in cart) {
    message += `${key} at $${cart[key]} and `
  }
  return message
}

function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart.i[i]
  }
  return total
}

function removeFromCart(item) {
  if (cart.hasOwnProperty(item)) {
    delete cart[item]
    return cart
  } else
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  
  if (cardNumber === "")
    return "Sorry, we don't have a credit card on file for you."
  else {
    var amount = total();
    cart.length = 0
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`
  }
}
