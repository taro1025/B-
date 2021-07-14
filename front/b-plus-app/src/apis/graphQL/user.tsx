import axios from "axios"

export const allUser = (query: any) => {
  return axios.post('http://127.0.0.1:3000/graphql',
    {
      query: query
    })
    .then(res => {
      console.log("gラフ", res)
      return res.data
    })
    .catch((e) => console.log("gラフ失敗", e))
};
