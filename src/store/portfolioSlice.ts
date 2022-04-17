import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CompanyAbriged } from '../schema/validators'

type PortfolioState = {
    portfolio: StringMap<CompanyAbriged>
}

const initialState: PortfolioState = {
    portfolio: {},
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        addCompany: (state, action: PayloadAction<CompanyAbriged>) => {
            state.portfolio = { ...state.portfolio, [action.payload.symbol]: action.payload }
        },
        removeCompany: (state, action: PayloadAction<string>) => {
            const { [action.payload]: value, ...rest } = state.portfolio
            state.portfolio = rest
        },
    },
})

const { reducer, actions } = portfolioSlice
export const portfolioActions = actions
export const portfolioReducer = reducer
