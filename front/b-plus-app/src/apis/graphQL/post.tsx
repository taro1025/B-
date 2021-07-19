export const getTimeline = `
{
  timeline{
    id
    impression
    title
    user{
      name
      id
      image
    }
    rank{
      rank
      mediumUrl
    }
    comments{
      user{
        name
        id
        image
      }
      comment
    }
  }
}
`

export const getMyPosts = (isbn: string): string => {
  return `
  {
    myPosts(isbn: "${isbn}"){
      id
      impression
      title
      user{
        name
        id
        image
      }
      rank{
        rank
        mediumUrl
      }
      comments{
        user{
          name
          id
          image
        }
        comment
      }
    }
  }
  `
}

export const getPosts = (isbn: string): string => {
  return `
  {
    posts(isbn: "${isbn}"){
      id
      impression
      title
      user{
        name
        id
        image
      }
      rank{
        rank
        mediumUrl
      }
      comments{
        user{
          name
          id
          image
        }
        comment
      }
    }
  }
  `
}
