"use client";

import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Event =
  | ChangeEvent<HTMLInputElement>
  | FormEvent<HTMLFormElement>
  | MouseEvent<HTMLButtonElement>;

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    if (!input.trim()) return;

    router.push(`/search/web?searchTerm=${input}`);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const responce = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!responce) return;

    router.push(`/search/web?searchTerm=${responce}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        className="flex justify-center items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5
        py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
        onSubmit={handleSubmit}
      >
        <IoSearch className="text-lg text-gray-500" />
        <input
          type="text"
          className="flex-grow focus:outline-none pl-2"
          value={input}
          onChange={onChangeInput}
        />
        <FaMicrophone className="text-lg" />
      </form>
      <div className="flex flex-col justify-center space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row mt-9">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading && (
            <img
              className="h-6 text-center"
              src="spinner.svg"
              alt="loading..."
            />
          )}
          {!randomSearchLoading && "I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
