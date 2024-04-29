export const UPDATE_CART_ITEM = 'cart/UPDATE_CART_ITEM';
export const UPDATE_CART_ITEM_QUANTITY = 'cart/UPDATE_CART_ITEM_QUANTITY';
export const CLEAR_CART = 'cart/CLEAR_CART';
export const ADD = 'cart/ADD'
export const REMOVE = 'cart/REMOVE'
export const REMOVE_ITEM = 'cart/REMOVE_ITEM'

export const updateCartItem = item => ({
    type: UPDATE_CART_ITEM,
    item
})

export const add = item => ({
    type: ADD,
    item
})
export const remove = item => ({
    type: REMOVE,
    item
})
export const removeItem = item => ({
    type: REMOVE_ITEM,
    item
})

export const updateCartItemQuantity = (product, quantity) => ({
    type: UPDATE_CART_ITEM_QUANTITY,
    product,
    quantity
})

export const clearCart = () => ({
    type: CLEAR_CART,
})