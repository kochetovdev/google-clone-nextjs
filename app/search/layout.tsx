import type { Metadata } from "next";
import "./../globals.css";
import SearchHeader from "./_components/SearchHeader";

export const metadata: Metadata = {
  title: "Google Clone NextJS 14",
  description: "Google clone created by NextJS 14",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
