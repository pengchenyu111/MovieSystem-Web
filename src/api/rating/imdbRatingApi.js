import httpFetch from "@/api/httpFetch";

export const queryIMDBRating = (doubanId) => {
  const url = `movie_info/imdbRatings/doubanId/${doubanId}`
  return httpFetch.get(url)
}

export  const queryIMDBVotes = (doubanId) => {
  const url = `movie_info/imdbRatings/vote/doubanId/${doubanId}`
  return httpFetch.get(url)
}
