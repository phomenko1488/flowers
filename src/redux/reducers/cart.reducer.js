import {
    ADD,
    CLEAR_CART, REMOVE, REMOVE_ITEM,
    UPDATE_CART_ITEM,
    UPDATE_CART_ITEM_QUANTITY,
} from '../actions/cart.actions';


export const cartReducer = (state = {items: [], totalSum: 0}, action) => {
    switch (action.type) {
        case ADD: {
            let editItems = state.items
            let value1 = action.item;
            let searchedItem
            editItems.forEach(item => {
                if (item.item.id === value1.product.id && item.size === value1.size)
                    searchedItem = item
            })
            if (searchedItem === null || searchedItem === undefined) {
                searchedItem = {item: value1.product, qty: 1, size: value1.size}
                editItems.push(searchedItem)
            } else {
                let indexOfSearch = editItems.indexOf(searchedItem)
                searchedItem.qty = searchedItem.qty + 1
                editItems[indexOfSearch] = searchedItem
            }
            return {...state, items: editItems, totalSum: state.totalSum + value1.product.price}
        }
        case REMOVE:
            let editItems = state.items
            let value1 = action.item;
            let searchedItem
            let editedSum = state.totalSum
            editItems.forEach(item => {
                if (item.item.id === value1.product.id && item.size === value1.size)
                    searchedItem = item
            })
            if (searchedItem !== null && searchedItem !== undefined) {
                if (searchedItem.qty > 1) {
                    let indexOfSearch = editItems.indexOf(searchedItem)
                    searchedItem.qty = searchedItem.qty - 1
                    editItems[indexOfSearch] = searchedItem
                } else {
                    let indexOfSearch = editItems.indexOf(searchedItem)
                    editItems.splice(indexOfSearch, 1)
                }
                editedSum = editedSum - searchedItem.item.price
            }
            return {...state, items: editItems, totalSum: editedSum}
        case REMOVE_ITEM:
            let items = state.items
            let value = action.item;
            let mySearchedItem
            let editedTotalSum = state.totalSum
            items.forEach(item => {
                console.log(item)
                console.log(value)
                if (item.item.id === value.product.id && item.size === value.size)
                    mySearchedItem = item
            })
            if (mySearchedItem !== null && mySearchedItem !== undefined) {
                let indexOfSearch = items.indexOf(mySearchedItem)
                items.splice(indexOfSearch, 1)
                editedTotalSum = editedTotalSum - (mySearchedItem.qty * mySearchedItem.item.price)
            }
            return {...state, items: items, totalSum: editedTotalSum}
        case CLEAR_CART:
            return {items: [], totalSum: 0}
        default:
            return state;
    }
};