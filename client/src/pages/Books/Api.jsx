import { ApiBaseUrl } from "../../services/Config";
import REQUEST from "../../services/Request";

export async function GET_BOOKS(data) {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `books`,
    data,
  }).catch((error) => console.log(error));
}

export async function DELETE_BOOK(id) {
  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `books/${id}`,
  }).catch((error) => console.log(error));
}
