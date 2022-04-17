import React from 'react'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import styled from 'styled-components'
import { CompanyAbriged } from '../schema/validators'
import { colors } from '../utils/colors'
import { spacing } from '../utils/spacing'

const Wrapper = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${spacing.s8} ${spacing.s12};
    margin-bottom: ${spacing.s4};
    border-radius: 5px;
    background-color: ${colors.offWhite};
`

type CompanyListItemProps = {
    company: CompanyAbriged
    onCompanySelect: (company: CompanyAbriged) => void
}

export const CompanyListItem: React.FC<CompanyListItemProps> = ({ company, onCompanySelect }) => {
    const onCompanyClick = () => {
        onCompanySelect(company)
    }
    return (
        <Wrapper>
            <p>
                {company.symbol} - {company.name}
            </p>
            <IconButton onClick={onCompanyClick}>
                <AddIcon />
            </IconButton>
        </Wrapper>
    )
}
