import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExperApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2>GIFS APP</h2>
      <AddCategory setCategories={setCategories} />
      <hr /> 
          <ol>
            {
            categories.map(category => (
              <GifGrid
                key={category}
                category={category}
              />
            ))
            }
          </ol>
    </>
  );
};
