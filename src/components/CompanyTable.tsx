import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { CompanyAbriged } from '../schema/validators'
import { IconButton, Link } from '@mui/material'
import { useAppDispatch } from '../store/store'
import { portfolioActions } from '../store/portfolioSlice'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'

type TableRowProps = {
    row: CompanyAbriged
    onRemove: (symbol: string) => void
    navigateToOverview: (symbol: string) => void
}

export const CompanyTableRow: React.FC<TableRowProps> = ({ row, onRemove, navigateToOverview }) => {
    const { name, symbol } = row
    const onRemoveClick = () => onRemove(symbol)
    const onCompanyNameClick = () => navigateToOverview(symbol)

    return (
        <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <Link onClick={onCompanyNameClick}>{name}</Link>
            </TableCell>
            <TableCell>{symbol}</TableCell>
            <TableCell>
                <IconButton onClick={onRemoveClick}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

type CompanyTableProps = {
    rows: CompanyAbriged[]
}

export const CompanyTable: React.FC<CompanyTableProps> = ({ rows }) => {
    const dispatch = useAppDispatch()
    let navigate = useNavigate()
    const navigateToOverview = (symbol: string) => navigate(`/overview/${symbol}`)

    const onRemove = (symbol: string) => {
        dispatch(portfolioActions.removeCompany(symbol))
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <CompanyTableRow
                            key={row.name}
                            row={row}
                            onRemove={onRemove}
                            navigateToOverview={navigateToOverview}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
