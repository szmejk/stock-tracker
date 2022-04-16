import { createSlice } from '@reduxjs/toolkit'
import { CompanyAbriged } from '../schema/validators'

type PortfolioState = {
    portfolio: StringMap<CompanyAbriged>
}

const initialState: PortfolioState = {
    portfolio: {},
}

export const companySlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {},
})
