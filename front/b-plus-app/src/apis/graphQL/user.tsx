import axios from "axios"
import { DEFAULT_GRAPH_QL_URL } from "../../urls/index"

export const allUser = (query: any) => {
  return axios.post(DEFAULT_GRAPH_QL_URL,
    {
      query: query
    })
    .then(res => {
      console.log("gラフ", res)
      return res.data
    })
    .catch((e) => console.log("gラフ失敗", e))
};
