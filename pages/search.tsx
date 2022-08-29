import SearchLayout from "@/components/SearchLayout";
import { SearchResult } from "@/types/common";
import { useRouter } from "next/router";
import useSWR from "swr";

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const response = await fetch(input, init);
  return response.json();
}

export default function Search() {
  const router = useRouter();
  const { q, cursor } = router.query;

  const { data, error } = useSWR<SearchResult>(
    cursor ? `/api/search?q=${q}&cursor=${cursor}` : `/api/search?q=${q}`,
    fetcher
  );

  const extractContent = (s: any) => {
    var span = document.createElement("span");
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };

  const truncate = (s: any, n: number) => {
    if (s.length > n) {
      return s.substr(0, n - 1) + "...";
    }
    return s;
  };

  return (
    <SearchLayout>
      <div className="ml-7 mb-12">
        {!data ? (
          <div className="flex flex-col gap-y-3 w-1/2 ml-24 mb-10">
            loading...
          </div>
        ) : !data.results || error ? (
          <div className="flex flex-col gap-y-3 w-1/2 ml-24 mb-10">
            no results found
          </div>
        ) : (
          <div>
            <div className="flex flex-col gap-y-3 w-1/2 ml-24 mb-10">
              {data?.results.map((item) => (
                <a
                  key={item.id}
                  href={item.link!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 px-3 rounded-lg border-2 border-gray-700 bg-transparent text-gray-700 hover:shadow-lg  transition duration-150 ease-in-out"
                >
                  <div className="flex items-center">
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-400">
                        {item.link}
                      </span>
                      <div className="text-lg font-bold text-gray-700 ">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {truncate(extractContent(item.description).trim(), 300)}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {data?.next && (
              <a
                href={`/search?q=${q}&cursor=${data?.next}`}
                rel="noopener noreferrer"
                className="w-24 ml-24 flex items-center justify-between py-2 px-3 rounded-lg border-2 border-gray-700 bg-transparent text-gray-700 hover:shadow-lg  transition duration-150 ease-in-out"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </SearchLayout>
  );
}
