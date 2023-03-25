import { ApiBaseUrl } from "../../services/Config";
import REQUEST from "../../services/Request";

export async function UPDATE_BOOK(id, data) {
  return await REQUEST({
    method: "PUT",
    url: ApiBaseUrl + `books/${id}`,
    data,
  }).catch((error) => console.log(error));
}
export async function GET_A_BOOK(id) {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `books/${id}`,
  }).catch((error) => console.log(error));
}
