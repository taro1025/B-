import axios from "axios";
import {
  createBookUserFavoritesUrl,
  showBookUserFavoritesUrl,
  editBookUserFavoritesUrl,
  deleteBookUserFavoritesUrl
} from "../urls/index"



export const registerFavoriteBook = (
  book_isbn: string, userId: number,
  summary: string, description: string,
  medium: string, large: string
) => {
  return axios.post(createBookUserFavoritesUrl,
    {
      book_isbn: book_isbn,
      id: userId,
      description_summary: summary,
      description: description,
      medium_url: medium,
      url: large
    }, { withCredentials: true })
    .then(res => {
      console.log("人生の本に追加成功", res)
      return res.data
    })
    .catch((e) => console.log("人生の本、登録失敗", e))
};

export const fetchBookUserFavorite = (userId: number) => {
  return axios.get(showBookUserFavoritesUrl(String(userId)), { withCredentials: true })
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch((e) => console.log("失敗", e))
};

export const editBookUserFavorite = (idFavoriteBook: number, summary: string, description: string) => {
  return axios.get(editBookUserFavoritesUrl(String(idFavoriteBook)),
    {
      params: {
        summary: summary,
        description: description
      },
      withCredentials: true
    })
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch((e) => console.log("編集失敗", e))
};


export const deleteBookUserFavorite = (idFavoriteBook: number) => {
  return axios.delete(deleteBookUserFavoritesUrl(String(idFavoriteBook)), { withCredentials: true })
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch((e) => console.log("削除失敗", e))
};
