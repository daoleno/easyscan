import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div className="relative py-6 z-10">
        <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 max-w-screen-lg lg:p-0">
          <a className="flex items-center" href="/">
            <img className="h-10 w-auto sm:h-12 my-2" src="/logo.svg" alt="" />
          </a>

          <div className="hidden lg:flex md:ml-10 items-end">
            <a
              href="https://github.com/daoleno/easyscan"
              className="font-medium py-2 px-3 rounded-lg border-2 border-gray-700 bg-transparent text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-gray-50 transition duration-150 ease-in-out"
            >
              Github
            </a>
          </div>
        </nav>
      </div>
      <div className="mb-20 py-7">
        <div className="max-w-xl text-center mx-auto">
          <div className="w-2/3 mx-auto my-10">
            <form>
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
                  className="block p-4 pl-10 w-full text-sm text-gray-900 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search in web3"
                  required
                />
              </div>
            </form>
          </div>
          <img
            className="rounded-3xl"
            src={`/animals/${Math.floor(Math.random() * 25)}.svg`}
            alt="Random image"
          />
          <h1 className="text-3xl font-extrabold sm:text-5xl mt-8">
            Easy Scan
          </h1>
          <p className="mt-4 sm:leading-relaxed sm:text-xl">
            An easy way to scan crypto information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;