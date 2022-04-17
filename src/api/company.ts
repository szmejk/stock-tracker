import axios from 'axios'
import { CompanySearchResponse, companySearchResponseSchema } from '../schema/validators'

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

    const parsed = companySearchResponseSchema.parse(response.data)
    return parsed
}
