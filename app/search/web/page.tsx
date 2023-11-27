import { SearchData } from "@/app/types";
import Link from "next/link";
import WebSearchResults from "../_components/WebSearchResults";

interface Props {
  searchParams: {
    searchTerm: string;
  };
}

const WebSearchPage = async ({ searchParams }: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const responce = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!responce.ok) {
    throw new Error("Something went wrong");
  }
  const data = await responce.json();

  const results: SearchData[] = await data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage
        </p>
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <WebSearchResults results={data} />
    </div>
  );
};

export default WebSearchPage;
