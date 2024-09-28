import Head from "next/head";
import Header from "./components/Header";
import Banner from "./components/Banner";
import requests from "./utils/requests";
import axios from "axios";

async function getData() {
  try {
    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    ] = await Promise.all([
      axios.get(requests.fetchNetflixOriginals),
      axios.get(requests.fetchTrending),
      axios.get(requests.fetchTopRated),
      axios.get(requests.fetchActionMovies),
      axios.get(requests.fetchComedyMovies),
      axios.get(requests.fetchHorrorMovies),
      axios.get(requests.fetchRomanceMovies),
      axios.get(requests.fetchDocumentaries),
    ]);

    return {
      netflixOriginals: netflixOriginals.data.results,
      trendingNow: trendingNow.data.results,
      topRated: topRated.data.results,
      actionMovies: actionMovies.data.results,
      comedyMovies: comedyMovies.data.results,
      horrorMovies: horrorMovies.data.results,
      romanceMovies: romanceMovies.data.results,
      documentaries: documentaries.data.results,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("An error occurred while fetching the data");
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="bg-[#141414] min-h-screen relative bg-gradient-to-b from-gray-900/10 to-[#010511] overflow-hidden">
      <Head>
        <title>Home - Chinoflix</title>
        <link rel="icon" href="/flavicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner netflixOriginals={data.netflixOriginals}/>
      </main>
    </div>
  );
}