import { APIkey, baseUrl, checkResponse } from "./constants";

export const getNews = ({ q, from }) => {
  return fetch(
    `${baseUrl}q=${q}&from=${from}&sortBy=popularity&apiKey=${APIkey}`
  ).then(checkResponse);
};
