import React from 'react'
import styled from 'styled-components'
import { CompanyAbriged } from '../schema/validators'
import { spacing } from '../utils/spacing'

const Wrapper = styled.li`
    display: flex;
    justify-content: space-between;

    padding: ${spacing.s8} ${spacing.s12};
    margin-bottom: ${spacing.s4};
`

type CompanyListItemProps = {
    company: CompanyAbriged
    onCompanySelect: (company: CompanyAbriged) => void
}

export const CompanyListItem: React.FC<CompanyListItemProps> = ({ company, onCompanySelect }) => {
    const onCompanyClick = () => {
        console.log(company)
        onCompanySelect(company)
    }
    return (
        <Wrapper>
            <p>
                {company.symbol} - {company.name}
            </p>
            <button onClick={onCompanyClick}>dodaj</button>
        </Wrapper>
    )
}
