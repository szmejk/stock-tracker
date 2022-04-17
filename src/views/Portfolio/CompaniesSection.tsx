import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { CompanyTable } from '../../components/CompanyTable'
import { RootState } from '../../store/store'
import { breakpoints } from '../../utils/breakpoints'

const CompaniesSectionWrapper = styled.div`
    @media (min-width: ${breakpoints.lg}) {
        flex: 1;
    }
`

export const CompaniesSection = () => {
    const portfolio = useSelector((state: RootState) => state.portfolioReducer.portfolio)
    const portfolioArray = useMemo(() => Object.values(portfolio), [portfolio])

    return (
        <CompaniesSectionWrapper>
            <CompanyTable rows={portfolioArray} />
        </CompaniesSectionWrapper>
    )
}
