import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
     'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '5721965616msh02dadc16b8b332bp1e1ee8jsn5646da9047d2'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
        reducerPath: 'cryptoNewsApi',
        baseQuery: fetchBaseQuery({
                baseUrl
        }),
        endpoints: (builder) => ({
                getCryptoNews: builder.query({
                  query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),  
                })
        })
});

export const {
        useGetCryptoNewsQuery,
} = cryptoNewsApi;
