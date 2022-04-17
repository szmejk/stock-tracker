import React, { useEffect, useState } from 'react'
import { TextField, Stack } from '@mui/material'
import { useDebounce } from 'use-debounce'
import { useSelector } from 'react-redux'
import { companiesActions, queryCompaniesThunk } from '../../store/companiesSlice'
import { RootState, useAppDispatch } from '../../store/store'
import { CompanyListItem } from '../../components/CompanyListItem'
import { CompanyAbriged } from '../../schema/validators'
import { portfolioActions } from '../../store/portfolioSlice'

export const SearchSection = () => {
    const dispatch = useAppDispatch()
    const [companyQuery, setCompanyQuery] = useState('')
    const companies = useSelector((state: RootState) => state.companiesReducer.companies)
    const isLoading = useSelector((state: RootState) => state.companiesReducer.isLoading)

    const [debouncedQuery] = useDebounce(companyQuery, 350)

    const onCompanyQueryChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setCompanyQuery(e.target.value)
    }

    useEffect(() => {
        if (debouncedQuery.length < 1) {
            dispatch(companiesActions.removeCompanies())
            return
        }
        dispatch(queryCompaniesThunk(debouncedQuery))
    }, [dispatch, debouncedQuery])

    const onCompanySelect = (company: CompanyAbriged) => {
        dispatch(portfolioActions.addCompany(company))
    }

    return (
        <Stack>
            <TextField fullWidth value={companyQuery} onChange={onCompanyQueryChange} label="Company name" />
            <div>
                {isLoading ? (
                    <p>Loading</p>
                ) : (
                    Object.values(companies).map(company => (
                        <CompanyListItem key={company.symbol} company={company} onCompanySelect={onCompanySelect} />
                    ))
                )}
            </div>
        </Stack>
    )
}
