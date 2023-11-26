"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";

const SearchHeaderOptions = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const selectTab = (tab: string) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };

  return (
    <article className="flex space-x-4 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2${
          pathName === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
        onClick={() => selectTab("All")}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2${
          pathName === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
        onClick={() => selectTab("Images")}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </article>
  );
};

export default SearchHeaderOptions;
