export const getCompanySearchEndpoint = (query: string) =>
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${
        process.env.REACT_APP_API_TOKEN || ''
    }`

export const getCompanyOveriewEndpoint = (symbol: string) =>
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${
        process.env.REACT_APP_API_TOKEN || ''
    }`
