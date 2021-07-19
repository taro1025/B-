import axios from "axios"
import { DEFAULT_GRAPH_QL_URL } from "../../urls/index"


export const graphQL = (query: string) => {
  return axios.post(DEFAULT_GRAPH_QL_URL,
    {
      query: query
    }, { withCredentials: true })
    .then(res => {
      console.log("data", res)
      return res.data.data
    })
    .catch((e) => console.log("graphql取得失敗", e))
};
