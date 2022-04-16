import { z } from 'zod'

export const companyAbrigedSchema = z
    .object({
        '1. symbol': z.string(),
        '2. name': z.string(),
    })
    .transform(data => ({ symbol: data['1. symbol'], name: data['2. name'] }))

export type CompanyAbriged = z.output<typeof companyAbrigedSchema>

export const companySearchResponseSchema = z.object({
    bestMatches: z.array(companyAbrigedSchema),
})

export type CompanySearchResponse = z.output<typeof companySearchResponseSchema>

export const companyOveriewResponseSchema = z
    .object({
        Name: z.string(),
        Address: z.string(),
        Description: z.string(),
        MarketCapitalization: z.string().transform(capitalization => parseInt(capitalization)),
    })
    .transform(({ Name, Address, Description, MarketCapitalization }) => ({
        name: Name,
        address: Address,
        description: Description,
        marketCapitalization: MarketCapitalization,
    }))

export type CompanyOveriew = z.output<typeof companyOveriewResponseSchema>
