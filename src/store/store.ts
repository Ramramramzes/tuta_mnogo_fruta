import { combineReducers, configureStore } from '@reduxjs/toolkit'
import basketReducer from './basket'
import catalogReduсer from './catalog'
import itemReducer from './item'

const rootReducer = combineReducers({
  basket: basketReducer,
  catalog: catalogReduсer, 
  item: itemReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch