export const APIkey = "09d3ce03d90444e9b0d7def99cfdbd63";

export const baseUrl = "https://newsapi.org/v2/everything?";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
