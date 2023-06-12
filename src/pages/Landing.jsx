import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "dscsdv";
  const response = await axios(`${cocktailSearchUrl + searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return <div>Landing</div>;
};

export default Landing;
