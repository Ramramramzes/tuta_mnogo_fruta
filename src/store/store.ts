import { combineReducers, configureStore } from '@reduxjs/toolkit'
import catalogReduсer from './catalog'
import itemReducer from './item'
import basketReducer from './basket'

const rootReducer = combineReducers({
  catalog: catalogReduсer, 
  item: itemReducer,
  basket: basketReducer,

})

const store = configureStore({
  reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch