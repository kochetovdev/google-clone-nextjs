"use client";

import { RxCross2 } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!term.trim()) return;

    router.push(`/search/web?searchTerm=${term}`);
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  return (
    <form  
      className="flex border-gray-700 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
      onSubmit={handleSubmit}
    >
      <input
        value={term}
        onChange={onInputChange}
        type="text"
        className="w-full focus:outline-none "
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <FaMicrophone className="hidden sm:inline-flex text-3xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch onClick={handleSubmit} className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer " />
    </form>
  );
};

export default SearchBox;
