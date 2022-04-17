import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCompanyOverview } from '../api/company'
import { CompanyOveriew } from '../schema/validators'

type OverviewState = {
    overview: CompanyOveriew | null
} & CommonReduxState

const initialState: OverviewState = {
    isLoading: false,
    error: false,
    errorMessage: '',
    overview: null,
}

export const getCompanyOverviewThunk = createAsyncThunk<CompanyOveriew, string>(
    'overview/get',
    async (query, { rejectWithValue }) => {
        try {
            const response = await getCompanyOverview(query)
            return response
        } catch (e: unknown) {
            return rejectWithValue('error')
        }
    }
)

export const overviewSlice = createSlice({
    name: 'overview',
    initialState,
    reducers: {
        removeOverview: state => {
            state.overview = null
        },
    },
    extraReducers: builder => {
        builder.addCase(getCompanyOverviewThunk.pending, state => {
            state.isLoading = true
            state.error = false
            state.errorMessage = ''
        })
        builder.addCase(getCompanyOverviewThunk.rejected, state => {
            state.isLoading = false
            state.error = true
        })
        builder.addCase(getCompanyOverviewThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.error = false
            state.overview = payload
        })
    },
})

const { reducer, actions } = overviewSlice
export const overviewActions = actions
export const overviewReducer = reducer
