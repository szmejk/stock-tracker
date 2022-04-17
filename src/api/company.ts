import axios from 'axios'
import {
    CompanyOveriew,
    companyOveriewResponseSchema,
    CompanySearchResponse,
    companySearchResponseSchema,
} from '../schema/validators'

export const getCompanySearchEndpoint = (query: string) =>
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${
        process.env.REACT_APP_API_TOKEN || ''
    }`

export const getCompanyOveriewEndpoint = (symbol: string) =>
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${
        process.env.REACT_APP_API_TOKEN || ''
    }`

export const queryCompanies = async (query: string): Promise<CompanySearchResponse> => {
    const response = await axios.get(getCompanySearchEndpoint(query))

    return companySearchResponseSchema.parse(response.data)
}

export const getCompanyOverview = async (symbol: string): Promise<CompanyOveriew> => {
    const response = await axios.get(getCompanyOveriewEndpoint(symbol))

    return companyOveriewResponseSchema.parse(response.data)
}
