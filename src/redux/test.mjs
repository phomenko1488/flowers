import {createStore} from 'redux'

/**
 * Это редюсер - чистая функция в формате (state, action) => state.
 * Он описывает то, как экшен преобразовывает состояние в следующее состояние
 *
 * Формат состояния зависит от вас: это может быть примитивом,
 * массивом, объектом или даже структурой данных Immutable.js.
 * Важно только одно, вы не должны изменять объект состояния
 * напрямую, а возвращать новый объект, если состояние изменилось
 *
 * В этом примере мы используем `switch` и строки, но вы можете
 * использовать хелпер, который следует другому соглашению
 * (например, function maps), если это имеет смысл для вашего
 * проекта.
 */
function cart(state = {items: []}, action) {
    switch (action.type) {
        case 'ADD': {
            let editItems = state.items
            let value1 = action.value;
            let searchedItem
            editItems.forEach(item => {
                if (item.item.id === value1.id)
                    searchedItem = item
            })
            if (searchedItem === null || searchedItem === undefined) {
                searchedItem = {item: value1, qty: 1}
                editItems.push(searchedItem)
            } else {
                let indexOfSearch = editItems.indexOf(searchedItem)
                searchedItem.qty = searchedItem.qty + 1
                editItems[indexOfSearch] = searchedItem
            }
            return {...state, items: editItems}
        }
        case 'REMOVE':
            let editItems = state.items
            let value1 = action.value;
            let searchedItem
            editItems.forEach(item => {
                if (item.item.id === value1.id)
                    searchedItem = item
            })
            if (searchedItem !== null && searchedItem !== undefined)
                if (searchedItem.qty > 1) {
                    let indexOfSearch = editItems.indexOf(searchedItem)
                    searchedItem.qty = searchedItem.qty - 1
                    editItems[indexOfSearch] = searchedItem
                } else {
                    let indexOfSearch = editItems.indexOf(searchedItem)
                    editItems.splice(indexOfSearch, 1)
                }
            return {...state, items: editItems}
        case 'CLEAR_CART':
            return {items: []}
    }
}

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let cartStore = createStore(cart)

cartStore.subscribe(() => console.log(cartStore.getState().items))

let value = {name: '228', price: 100, id: 20};
cartStore.dispatch({type: 'ADD', value: value})
cartStore.dispatch({type: 'ADD', value: value})
cartStore.dispatch({type:'CLEAR_CART'})
cartStore.dispatch({type: 'ADD', value: value})
cartStore.dispatch({type: 'ADD', value: value})
cartStore.dispatch({type: 'REMOVE', value: value})
cartStore.dispatch({type: 'REMOVE', value: value})
cartStore.dispatch({type: 'REMOVE', value: value})
cartStore.dispatch({type: 'REMOVE', value: value})
// Создаем Redux стор, который хранит состояние вашего приложения.
// Его API - { subscribe, dispatch, getState }.
let store = createStore(counter)

// Вы можете использовать subscribe() для обновления UI в ответ на изменения состояния.
// Обычно вы должны использовать библиотеку привязки (например, React Redux), а не использовать subscribe() напрямую.
// Однако также может быть полезно сохранить текущее состояние в localStorage.
store.subscribe(() =>
    console.log(store.getState())
)

// Единственный способ изменить внутреннее состояние - это вызвать экшен
// Экшены могут быть сериализированы, залогированы или сохранены и далее воспроизведены.
store.dispatch({type: 'INCREMENT'})
// 1
store.dispatch({type: 'INCREMENT'})
// 2
store.dispatch({type: 'DECREMENT'})
// 1