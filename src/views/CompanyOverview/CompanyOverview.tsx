import React, { useEffect } from 'react'
import { Box, Button, CircularProgress, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { PageWrapper } from '../../components/PageWrapper'
import { getCompanyOverviewThunk, overviewActions } from '../../store/overviewSlice'
import { RootState, useAppDispatch } from '../../store/store'
import { errors } from '../../utils/errors'

const formatMarketCapitalization = (cap: number) =>
    new Intl.NumberFormat('en', {
        notation: 'compact',
        compactDisplay: 'short',
    }).format(cap)

export const CompanyOverview = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const params = useParams<{ companySymbol: string }>()
    const { overview, error, isLoading } = useSelector((state: RootState) => state.overviewReducer)

    const onGoBack = () => {
        dispatch(overviewActions.removeOverview())
        navigate(-1)
    }

    useEffect(() => {
        params.companySymbol && dispatch(getCompanyOverviewThunk(params.companySymbol))
    }, [params, dispatch])

    return (
        <PageWrapper>
            <Stack alignItems={'flex-start'}>
                <Button variant="outlined" onClick={onGoBack}>
                    Go back
                </Button>
                {isLoading && (
                    <Stack direction="row" mt={5} justifyContent="center" width="100%">
                        <CircularProgress />
                    </Stack>
                )}

                {error && (
                    <Stack direction="row" mt={5} justifyContent="center" width="100%">
                        <p>{errors.generic}</p>
                    </Stack>
                )}

                {overview && (
                    <Box mt={2}>
                        <h1>{overview.name}</h1>
                        <Box mt={1} mb={1}>
                            <p>
                                <strong>Address:</strong> {overview.address}
                            </p>
                            <p>
                                <strong>Market cap:</strong> {formatMarketCapitalization(overview.marketCapitalization)}
                            </p>
                        </Box>

                        <p>{overview.description}</p>
                    </Box>
                )}
            </Stack>
        </PageWrapper>
    )
}
