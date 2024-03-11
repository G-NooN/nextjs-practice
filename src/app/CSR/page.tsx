"use client";

import { useEffect, useState } from "react";
import { CatFactType } from "../types/type";

const CSRPage = () => {
  const [catFact, setCatFact] = useState<CatFactType | null>(null);
  const fetchData = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const result: CatFactType = await response.json();
    setCatFact(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!catFact) {
    return <div className="flex justify-center items-center text-xl font-bold">로딩중...</div>;
  }

  return <div className="flex justify-center items-center text-xl font-bold">{catFact.fact}</div>;
};

export default CSRPage;
