
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=> {
            headers.set('X-RapidAPI-Key','f18ef43a9cmsh7a669162ccc51bep1e32a8jsn1493098109c4')
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com')

            return headers

        }
    }),
    endpoints: (builder)=> ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })

})

export const {useLazyGetSummaryQuery} = articleApi