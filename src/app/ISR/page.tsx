import { CatFactType } from "../types/type";

const ISRPage = async () => {
  const response = await fetch("https://catfact.ninja/fact", {
    next: {
      revalidate: 5,
    },
  });
  const result: CatFactType = await response.json();

  return <div className="flex justify-center items-center text-xl font-bold">{result.fact}</div>;
};

export default ISRPage;
