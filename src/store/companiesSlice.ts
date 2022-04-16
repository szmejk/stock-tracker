import { createSlice } from '@reduxjs/toolkit'
import { CompanyAbriged } from '../schema/validators'

type CompaniesState = {
    companies: StringMap<CompanyAbriged>
} & CommonReduxState

const initialState: CompaniesState = {
    isLoading: false,
    error: false,
    errorMessage: '',
    companies: {},
}

export const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {},
})
