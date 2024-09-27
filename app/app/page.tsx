import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
      <div className="bg-[#141414] min-h-screen">
        <Head>
          <title>Home - Chinoflix</title>
          <link rel="icon" href="/flavicon.ico" />
        </Head>
        <Header />
        <main>
        </main>
      </div>
  )
}
