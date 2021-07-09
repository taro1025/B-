const DEFAULT_API_LOCALHOST: string = 'http://127.0.0.1/api/v1';
//'http://example-1506320326.ap-northeast-1.elb.amazonaws.com:3000/api/v1' //

//Notiifcation
//Login
//User
//Book Want To Read
//Book User Read
//Book User Favorite
//Post
//Like
//Comment
//Rank
//Login
//Relationship(Follow & Unfollow)

//Notification
export const notificationsUrl = `${DEFAULT_API_LOCALHOST}/notification`
export const checkNoticeUrl = `${DEFAULT_API_LOCALHOST}/check_notice`
export const checkedNoticeUrl = `${DEFAULT_API_LOCALHOST}/checked_notice`


//Login
export const loginUrl: string = `${DEFAULT_API_LOCALHOST}/login`
export const logoutUrl: string = `${DEFAULT_API_LOCALHOST}/logout`
export const checkLoginUrl: string = `${DEFAULT_API_LOCALHOST}/checkLogin`

//User
export const followingUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}/following`
export const folllowersUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}/followers`
export const usersIndexUrl: string = `${DEFAULT_API_LOCALHOST}/users`
export const createUserUrl: string = `${DEFAULT_API_LOCALHOST}/users`
export const showUserUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}`
export const updateUserUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}`
export const deleteUserUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}`

//Book want to Read
export const createBookWantToReadsUrl: string = `${DEFAULT_API_LOCALHOST}/book_want_to_reads`
export const showBookWantToReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_want_to_reads/${user_id}`
export const updateBookWantToReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_want_to_reads/${user_id}`
export const deleteBookWantToReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_want_to_reads/${user_id}`



//Book User Read
export const createBookUserReadsUrl: string = `${DEFAULT_API_LOCALHOST}/book_user_reads`
export const indexBookUserReadsUrl: string = `${DEFAULT_API_LOCALHOST}/book_user_reads`
export const showBookUserReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_reads/${user_id}`
export const updateBookUserReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_reads/${user_id}`
export const deleteBookUserReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_reads/${user_id}`
//Graph data
export const getGraphDataUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/graph_data/${user_id}`
export const getMonthDataUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/month_data/${user_id}`


//Book User Favorite
export const createBookUserFavoritesUrl: string = `${DEFAULT_API_LOCALHOST}/book_user_favorites`
export const showBookUserFavoritesUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_favorites/${user_id}`
export const updateBookUserFavoritesUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_favorites/${user_id}`
export const deleteBookUserFavoritesUrl = (idFavoriteBook: string): string => `${DEFAULT_API_LOCALHOST}/book_user_favorites/${idFavoriteBook}`
export const editBookUserFavoritesUrl = (idFavoriteBook: string): string => `${DEFAULT_API_LOCALHOST}/book_user_favorites/${idFavoriteBook}/edit`

//Post
export const createPostsUrl: string = `${DEFAULT_API_LOCALHOST}/posts`
export const indexPostsUrl: string = `${DEFAULT_API_LOCALHOST}/posts`
export const showPostsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/posts/${user_id}`
export const getPostsUrl = (post_id: string): string => `${DEFAULT_API_LOCALHOST}/get_post/${post_id}`
export const updatePostsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/posts/${user_id}`
export const deletePostsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/posts/${user_id}`
//Timeline
export const timelineUrl = `${DEFAULT_API_LOCALHOST}/timeline`


//Like
export const createLikesUrl: string = `${DEFAULT_API_LOCALHOST}/likes`
export const deleteLikesUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/likes/${user_id}`
export const indexLikesUrl: string = `${DEFAULT_API_LOCALHOST}/likes`
export const checkLikesUrl: string = `${DEFAULT_API_LOCALHOST}/check_like`

//Comment
export const createCommentsUrl: string = `${DEFAULT_API_LOCALHOST}/comments`
//export const showPostsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/posts/${user_id}`
export const updateCommentsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/comments/${user_id}`
export const deleteCommentsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/comments/${user_id}`

//Rank
export const createRanksUrl: string = `${DEFAULT_API_LOCALHOST}/ranks`
export const deleteRanksUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/ranks/${user_id}`
export const showRanksUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/ranks/${user_id}`
export const getRanksUrl: string = `${DEFAULT_API_LOCALHOST}/get_rank`

//Relationship(Follow & Unfollow)
export const followsUrl: string = `${DEFAULT_API_LOCALHOST}/relationships`
export const unfollowsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/relationships/${user_id}`
export const isFollowUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/is_follow/${user_id}`
//google
//export const searchBooksUrl: string = 'https://www.googleapis.com/books/v1/volumes'

//楽天　※urlエンコードする必要あり
//const APP_ID = process.env.REACT_APP_RAKUTEN_ID;
export const searchBooksUrl = (title: string): string => `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1044368519957304134&title=${title}`
export const getBooksUrl = (isbn: string): string => `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1044368519957304134&isbn=${isbn}`
