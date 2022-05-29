import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '5721965616msh02dadc16b8b332bp1e1ee8jsn5646da9047d2'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({
                baseUrl
        }),
        endpoints: (builder) => ({
                getCryptos: builder.query({
                   query:(count)=> createRequest(`/coins?limit=${count}`),    
                }),
                getCryptoDetails: builder.query({
                       query:(coinId)=>createRequest(`/coin/${coinId}`),
                }),
               getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
       
              
        })
});

export const {
        useGetCryptosQuery, useGetCryptoDetailsQuery,
        useGetCryptoHistoryQuery,
} = cryptoApi;


