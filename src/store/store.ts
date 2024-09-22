import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import catalogReduсer from './catalog';
import itemReducer from './item';
import basketReducer from './basket';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket','item','catalog'],
};

const rootReducer = combineReducers({
  catalog: catalogReduсer, 
  item: itemReducer,
  basket: basketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;