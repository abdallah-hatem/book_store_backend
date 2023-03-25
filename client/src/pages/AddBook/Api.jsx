import { ApiBaseUrl } from "../../services/Config";
import REQUEST from "../../services/Request";

export async function ADD_BOOK(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `books`,
    data,
  }).catch((error) => console.log(error));
}
