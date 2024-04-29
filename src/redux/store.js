import { combineReducers, createStore, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './reducers/cart.reducer';

// Определите корневой reducer
const rootReducer = combineReducers({
    cart: cartReducer,
});

// Определите конфигурацию для redux-persist
const persistConfig = {
    key: 'root',
    storage,
};

// Оберните rootReducer в persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Подготовка для Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Создайте Redux store, используя persistedReducer
const store = createStore(persistedReducer, composeEnhancers());

// Создайте persistor для использования в вашем приложении
const persistor = persistStore(store);
export { store, persistor };
