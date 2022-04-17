import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../utils/breakpoints'
import { colors } from '../utils/colors'
import { spacing } from '../utils/spacing'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
`

const PageHeader = styled.header`
    width: 100%;
    padding: ${spacing.s12} ${spacing.s8};
    border-bottom: 1px solid ${colors.gray};
    font-weight: 600;

    @media (min-width: ${breakpoints.md}) {
        padding: ${spacing.s12} ${spacing.s48};
        font-size: 16px;
    }
`

const PageContent = styled.main`
    width: 100%;
    padding: ${spacing.s12} ${spacing.s8};
    height: 100%;
    @media (min-width: ${breakpoints.md}) {
        padding: ${spacing.s12} ${spacing.s48};
    }
`

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <PageContainer>
            <PageHeader>StockTracker</PageHeader>
            <PageContent>{children}</PageContent>
        </PageContainer>
    )
}
