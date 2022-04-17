import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { companiesReducer } from './companiesSlice'
import { overviewReducer } from './overviewSlice'
import { portfolioReducer } from './portfolioSlice'

const reducer = { portfolioReducer, companiesReducer, overviewReducer }

export const store = configureStore({ reducer })

export type ReduxStore = typeof store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
