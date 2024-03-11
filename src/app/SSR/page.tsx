import { CatFactType } from "../types/type";

const SSRPage = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "no-cache",
  });
  const result: CatFactType = await response.json();

  return <div className="flex justify-center items-center text-xl font-bold">{result.fact}</div>;
};

export default SSRPage;
