export const APIkey = "09d3ce03d90444e9b0d7def99cfdbd63";

export const baseUrl = "https://newsapi.org/v2/everything?";

export const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);
export const to = new Date(Date.now()).toISOString().slice(0, 10);

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
