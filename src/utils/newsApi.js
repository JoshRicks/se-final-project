import { APIkey, baseUrl, checkResponse, from, to } from "./constants";

export const getNews = ({ q }) => {
  return fetch(
    `${baseUrl}q=${q}&from=${from}&to=${to}&pageSize=100&sortBy=relevancy&apiKey=${APIkey}`
  ).then(checkResponse);
};
