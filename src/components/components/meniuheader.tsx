import React, { useEffect, useState } from "react";
import { Icategory } from "../../types/categoryreducer";
import { typetuseselector } from "./../../hooks/useselector";

const Meniuheader = () => {
  const [categories, setCategories] = useState<Icategory[] | null>(null);
  const { category } = typetuseselector((state) => state);
  useEffect(() => {
    setCategories(category.categories);
  }, [category.categories]);
  return (
    <div className="meniuheader">
      {categories
        ? categories
            .filter((elem) => elem.childrens.length < 1)
            .filter((elem) => elem.parentId !== "")
            .map((el) => {
              return <div key={el._id}>{el.title}</div>;
            })
        : null}
      {categories
        ? categories
            .filter((elem) => elem.parentId === "")
            .filter((elem) => elem.childrens.length > 0)
            .map((el) => {
              return <div key={el._id}>{el.title}</div>;
            })
        : null}
    </div>
  );
};

export default Meniuheader;
