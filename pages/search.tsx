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
  const { q } = router.query;

  const { data, error } = useSWR<SearchResult>(`/api/search?q=${q}`, fetcher);

  if (error) {
    return <div>failed to load</div>;
  }

  return (
    <SearchLayout>
      <div className="ml-7">
        {!data ? (
          <div className="flex flex-col gap-y-3 w-1/2 ml-24 mb-10">
            loading...
          </div>
        ) : (
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
                    <div className="text-sm text-gray-500 ">
                      {item.description}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </SearchLayout>
  );
}
