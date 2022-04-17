import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { queryCompanies } from '../api/company'
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

export const queryCompaniesThunk = createAsyncThunk<CompanyAbriged[], string>(
    'companies/query',
    async (query, { rejectWithValue }) => {
        try {
            const response = await queryCompanies(query)
            return response.bestMatches
        } catch (e: unknown) {
            return rejectWithValue(e)
        }
    }
)

export const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        removeCompanies: state => {
            state.companies = {}
        },
    },
    extraReducers: builder => {
        builder.addCase(queryCompaniesThunk.pending, state => {
            state.isLoading = true
            state.error = false
            state.errorMessage = ''
        })
        builder.addCase(queryCompaniesThunk.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = true
        })
        builder.addCase(queryCompaniesThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.error = false
            state.companies = payload.reduce<StringMap<CompanyAbriged>>((acc, company) => {
                acc[company.symbol] = company
                return acc
            }, {})
        })
    },
})

const { reducer, actions } = companiesSlice
export const companiesActions = actions
export const companiesReducer = reducer
