import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="text-white">
          <a>Sign up</a>
        </div>
        <form className="text-white">
          <input
            className=" text-gray-700"
            name="username"
            id="username"
            placeholder="username"
          />
          <input
            className=" text-gray-700"
            name="password"
            id="password"
            type="password"
            placeholder="password"
          />
        </form>
      </main>
    </>
  );
};

export default Home;
