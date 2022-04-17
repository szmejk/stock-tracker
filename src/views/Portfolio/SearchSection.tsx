import React, { useEffect, useState } from 'react'
import { TextField, Stack, Skeleton } from '@mui/material'
import { useDebounce } from 'use-debounce'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { companiesActions, queryCompaniesThunk } from '../../store/companiesSlice'
import { RootState, useAppDispatch } from '../../store/store'
import { CompanyListItem } from '../../components/CompanyListItem'
import { CompanyAbriged } from '../../schema/validators'
import { portfolioActions } from '../../store/portfolioSlice'
import { breakpoints } from '../../utils/breakpoints'
import { Box } from '@mui/system'
import { errors } from '../../utils/errors'

const SearchSectionWrapper = styled(Stack)`
    @media (min-width: ${breakpoints.lg}) {
        flex: 1;
    }
`

export const SearchSection = () => {
    const dispatch = useAppDispatch()
    const [companyQuery, setCompanyQuery] = useState('')
    const { companies, isLoading, error } = useSelector((state: RootState) => state.companiesReducer)

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
        <SearchSectionWrapper>
            <TextField fullWidth value={companyQuery} onChange={onCompanyQueryChange} label="Company name" />
            <Box mt={2}>
                {error && <Box>{errors.generic}</Box>}
                {isLoading && (
                    <Box>
                        <Stack>
                            <Skeleton width="100%" height={70} />
                            <Skeleton width="100%" height={70} />
                            <Skeleton width="100%" height={70} />
                        </Stack>
                    </Box>
                )}
                {!isLoading &&
                    !error &&
                    Object.values(companies).map(company => (
                        <CompanyListItem key={company.symbol} company={company} onCompanySelect={onCompanySelect} />
                    ))}
            </Box>
        </SearchSectionWrapper>
    )
}
