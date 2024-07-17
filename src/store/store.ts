import { combineReducers, configureStore } from '@reduxjs/toolkit'
import basketReducer from './basket'
import catalogReduсer from './catalog'

const rootReducer = combineReducers({
  basket: basketReducer,
  catalog: catalogReduсer, 
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch