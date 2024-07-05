import { combineReducers, configureStore } from '@reduxjs/toolkit'
import basketReducer from './basket'
const rootReducer = combineReducers({
  basket: basketReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch