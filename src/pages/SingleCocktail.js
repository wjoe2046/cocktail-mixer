import React from 'react';
import { useParams } from 'react-router-dom';

export const SingleCocktail = () => {
  const { id } = useParams();

  return <h1>Single Cocktail Page: {id}</h1>;
};
