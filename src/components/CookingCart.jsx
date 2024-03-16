import { useState } from "react";
import PropTypes from "prop-types";
import CurrentlyCooking from "./CurrentlyCooking";
import CurrentlyPreparing from "./CurrentlyPreparing";

const CookingCart = ({ prepareItems, handleRemovefromPrepareItems }) => {
  const [cookingItems, setCookingItems] = useState([]);

  const handlePrepare = (recipe) => {
    const isAlredyAdded = cookingItems.find(
      (item) => item.recipe_id === recipe.recipe_id,
    );
    if (!isAlredyAdded) {
      setCookingItems([...cookingItems, recipe]);
      handleRemovefromPrepareItems(recipe);
    }
  };
  return (
    <div className="flex w-5/12 flex-col gap-16 self-start rounded-2xl border border-sky-200 bg-sky-50 px-4 py-10">
      <CurrentlyPreparing
        prepareItems={prepareItems}
        handlePrepare={handlePrepare}
        handleRemovefromPrepareItems={handleRemovefromPrepareItems}
      ></CurrentlyPreparing>
      <CurrentlyCooking cookingItems={cookingItems}></CurrentlyCooking>
    </div>
  );
};

CookingCart.propTypes = {
  prepareItems: PropTypes.array.isRequired,
  handleRemovefromPrepareItems: PropTypes.func.isRequired,
};

export default CookingCart;
