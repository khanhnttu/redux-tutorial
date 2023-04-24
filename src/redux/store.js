import {createStore, combineReducers, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {counterReducer} from './countReducer'
import { todosReducer } from './todosReducer'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos']
}


const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk))) 

export const persistor = persistStore(store)