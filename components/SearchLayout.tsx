import { WithChildren } from "@/types/common";
import Image from "next/image";

export default function SearchLayout({ children }: WithChildren) {
  return (
    <div className="z-10">
      <nav className="my-10 flex items-stretch justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-stretch w-3/5 ">
          <a href="/" className="my-1">
            <Image src="/logo.svg" alt="" width={48} height={48} />
          </a>
          <form className="ml-7 w-full">
            <label
              htmlFor="default-search"
              className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative ">
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
                className="block p-4 pl-10 w-full text-sm text-gray-900 rounded-xl border border-gray-400 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search in web3"
                required
              />
            </div>
          </form>
        </div>
        <div className="hidden lg:flex md:ml-10 items-end">
          <a
            href="https://github.com/daoleno/easyscan"
            className="font-medium py-2 px-3 rounded-lg border-2 border-gray-700 bg-transparent text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-gray-50 transition duration-150 ease-in-out"
          >
            Github
          </a>
        </div>
      </nav>
      <section>{children}</section>
    </div>
  );
}
