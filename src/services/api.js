//THi Page Has All the Apis

import { Await } from "react-router-dom";

//This is the Movie APi
const Api_Key = "1c66132cc06e75b1183a9faafdccd728";
const BaseUrl = "https://api.themoviedb.org/3";

export const GetmovieLatest = async () => {
  const response = await fetch(`${BaseUrl}/movie/popular?api_key=${Api_Key}`);
  const data = await response.json();
  return data.results;
};

export const Searchmovie = async (query) => {
  const response = await fetch(
    `${BaseUrl}/search/movie?api_key=${Api_Key}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

//music api

export const GetlistofArtists = async () => {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=a7de8d85e7e00c084ee8cf3971814539&format=json
`
  );
  const data = await response.json();
  console.log("Fetched artist data:", data);
  return data.artists.artist;
};

export const SearchArtist = async (query) => {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${encodeURIComponent(
      query
    )}&api_key=a7de8d85e7e00c084ee8cf3971814539&format=json`
  );

  const result = await response.json();
  return result.results.artistmatches.artist;
};

//the book page

export const GetBookByDefault = async () => {
  const response =
    await fetch(`https://openlibrary.org/search.json?q=subject:history&limit=30
`);
  const data = await response.json();
  return data.docs;
};

//the tech page api
const ApiKEY = "pub_816873701cde88e1c319e46f85d5566d5b9e6"; //removed the b here

export const GetTechNews = async () => {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${ApiKEY}&category=technology&language=en`
    );
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.error("Error fetching tech news:", error);
    return [];
  }
};

export const GetAllNews = async () => {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${ApiKEY}&category=top&language=en`
    );
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.error("Error fetching tech news:", error);
    return [];
  }
};

//api for for football news
const Api_KEY = "pub_816873701cde88e1c319e46f85d5566d5b9e6";
export const getfottballNews = async () => {
  const response = await fetch(
    `https://newsdata.io/api/1/news?apikey=${Api_KEY}&q=english premier league OR european football OR champions league&category=sports&language=en`
  );
  const data = await response.json();
  console.log(data.results);
  return data.results;
};
