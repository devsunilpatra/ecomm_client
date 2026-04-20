

export const selectCartCount = (state)=>state.cart.cartItems.reduce((acc, item)=>acc+item.quantity, 0);

export const selectCartTotal = (state)=>state.cart.cartItems.reduce((acc, item)=>acc + item.price * item.quantity, 0);