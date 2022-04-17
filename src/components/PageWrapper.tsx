import React from 'react'
import styled from 'styled-components'
import { spacing } from '../utils/spacing'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const PageHeader = styled.header`
    width: 100%;
    padding: ${spacing.s12} ${spacing.s30};
    border-bottom: 1px solid;
`

const PageContent = styled.main`
    width: 100%;
    padding: ${spacing.s30} ${spacing.s48};
`

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <PageContainer>
            <PageHeader>Stock tracker</PageHeader>
            <PageContent>{children}</PageContent>
        </PageContainer>
    )
}
