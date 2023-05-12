import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  function getMessages() {
    // Get the messages from rust api
  }
  return (
    <>
      <Head>
        <title>Message</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="text-white">
          <a>Hi</a>
        </div>
        <form className="text-white">
          <input
            className=" text-gray-700"
            name="message"
            id="message"
            placeholder="message"
          />
          <input type="submit" name="send" />
        </form>
      </main>
    </>
  );
};

export default Home;
