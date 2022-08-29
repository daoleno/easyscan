import Layout from "@/components/Layout";
import type { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [randomNumber, setRandomNumber] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Router.push({
      pathname: "/search",
      query: { q: search },
    });
  };

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 25 + 1));
  }, []);

  return (
    <Layout>
      <div className="mb-20 py-7 mt-7">
        <div className="max-w-xl text-center mx-auto">
          <div className="w-2/3 mx-auto my-10">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-full text-sm text-gray-900 rounded-xl outline-none border border-gray-400 focus:ring-gray-700 focus:border-gray-700"
                  placeholder="Search in web3"
                  required
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
              </div>
            </form>
          </div>
          <img
            className="rounded-3xl"
            src={`/animals/${randomNumber}.svg`}
            alt="https://drawkit.com/product/animal-pets-illustrations"
          />
          <h1 className="text-3xl font-extrabold sm:text-5xl mt-8">
            Easy Scan
          </h1>
          <p className="mt-4 sm:leading-relaxed sm:text-xl">
            Search for web3 information easily
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
