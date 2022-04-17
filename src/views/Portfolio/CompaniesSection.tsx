import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { portfolioActions } from '../../store/portfolioSlice'
import { RootState } from '../../store/store'

export const CompaniesSection = () => {
    const dispatch = useDispatch()
    const portfolio = useSelector((state: RootState) => state.portfolioReducer.portfolio)
    const onRemove = (symbol: string) => {
        dispatch(portfolioActions.removeCompany(symbol))
    }
    useEffect(() => {
        console.log(portfolio)
    }, [portfolio])

    return (
        <div>
            {Object.values(portfolio).map(({ symbol, name }) => (
                <div>
                    <p>
                        {symbol} - {name}
                    </p>
                    <button onClick={() => onRemove(symbol)}>usun</button>
                </div>
            ))}
        </div>
    )
}
