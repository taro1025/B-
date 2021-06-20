const DEFAULT_API_LOCALHOST: string = 'http://127.0.0.1:3000/api/v1';

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


//Login
export const loginUrl: string = `${DEFAULT_API_LOCALHOST}/login`
export const logoutUrl: string = `${DEFAULT_API_LOCALHOST}/logout`
export const checkLoginUrl: string = `${DEFAULT_API_LOCALHOST}/checkLogin`

//User
export const followingUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}/following`
export const folllowersUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}/followers`
export const usersIndexUrl: string = `${DEFAULT_API_LOCALHOST}/users`
export const createUserUrl: string = `${DEFAULT_API_LOCALHOST}/users/new`
export const showUserUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}`
export const updateUserUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}`
export const deleteUserUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/users/${user_id}`

//Book want to Read
export const createBookWantToReadsUrl: string = `${DEFAULT_API_LOCALHOST}/book_want_to_reads/new`
//export const showBookWantToReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_want_to_reads/${user_id}`
export const updateBookWantToReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_want_to_reads/${user_id}`
export const deleteBookWantToReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_want_to_reads/${user_id}`


//Book User Read
export const createBookUserReadsUrl: string = `${DEFAULT_API_LOCALHOST}/book_user_reads/new`
//export const showBookUserReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_reads/${user_id}`
export const updateBookUserReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_reads/${user_id}`
export const deleteBookUserReadsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_reads/${user_id}`

//Book User Favorite
export const createBookUserFavoritesUrl: string = `${DEFAULT_API_LOCALHOST}/book_user_favorites/new`
//export const showBookUserFavoritesUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_favorites/${user_id}`
export const updateBookUserFavoritesUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_favorites/${user_id}`
export const deleteBookUserFavoritesUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/book_user_favorites/${user_id}`

//Post
export const createPostsUrl: string = `${DEFAULT_API_LOCALHOST}/posts/new`
//export const showPostsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/posts/${user_id}`
export const updatePostsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/posts/${user_id}`
export const deletePostsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/posts/${user_id}`

//Like
export const createLikesUrl: string = `${DEFAULT_API_LOCALHOST}/likes/new`
export const deleteLikesUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/likes/${user_id}`

//Comment
export const createCommentsUrl: string = `${DEFAULT_API_LOCALHOST}/comments/new`
//export const showPostsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/posts/${user_id}`
export const updateCommentsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/comments/${user_id}`
export const deleteCommentsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/comments/${user_id}`

//Rank
export const createRanksUrl: string = `${DEFAULT_API_LOCALHOST}/ranks/new`
export const deleteRanksUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/ranks/${user_id}`

//Relationship(Follow & Unfollow)
export const followsUrl: string = `${DEFAULT_API_LOCALHOST}/relationships`
export const unfollowsUrl = (user_id: string): string => `${DEFAULT_API_LOCALHOST}/relationships/${user_id}`

//google
export const searchBooksUrl: string = 'https://www.googleapis.com/books/v1/volumes'
