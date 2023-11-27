import { SearchData } from "@/app/types";

interface Props {
  searchParams: {
    searchTerm: string
  }
}

const WebSearchPage = async ({ searchParams }: Props) => {
  const responce = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await responce.json();

  const results: SearchData[] = await data.items;

  return <div>{results && results.map(result => (
    <h1>{result.title}</h1>
  ))}</div>;
};

export default WebSearchPage;
