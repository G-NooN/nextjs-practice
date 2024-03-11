import { CatFactType } from "../types/type";

const SSGPage = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const result: CatFactType = await response.json();

  return <div className="flex justify-center items-center text-xl font-bold">{result.fact}</div>;
};

export default SSGPage;
