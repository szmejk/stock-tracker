import React from 'react'
import { Stack } from '@mui/material'
import styled from 'styled-components'
import { CompaniesSection } from './CompaniesSection'
import { SearchSection } from './SearchSection'
import { PageWrapper } from '../../components/PageWrapper'
import { breakpoints } from '../../utils/breakpoints'
import { spacing } from '../../utils/spacing'
import { colors } from '../../utils/colors'

export const StackContainer = styled(Stack)`
    height: 100%;
`

const VerticalSpacer = styled.div`
    display: none;
    border-right: 1px solid ${colors.gray};
    height: 70%;
    margin: 0 ${spacing.s48};

    @media (min-width: ${breakpoints.lg}) {
        display: revert;
    }
`

export const Portfolio = () => {
    return (
        <PageWrapper>
            <StackContainer direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }}>
                <SearchSection />
                <VerticalSpacer />
                <CompaniesSection />
            </StackContainer>
        </PageWrapper>
    )
}
