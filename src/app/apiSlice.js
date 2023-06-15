import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/api'
import {cryptoNewsApi} from '../services/NewsApi'

export const store = configureStore({
    reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),
      
  })
  