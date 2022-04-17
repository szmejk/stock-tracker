import React from 'react'
import { Stack } from '@mui/material'
import { CompaniesSection } from './CompaniesSection'
import { SearchSection } from './SearchSection'

export const Portfolio = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            <SearchSection />
            <CompaniesSection />
        </Stack>
    )
}
