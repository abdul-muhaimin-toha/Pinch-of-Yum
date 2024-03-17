import { useState } from "react";
import PropTypes from "prop-types";
import CurrentlyCooking from "./CurrentlyCooking";
import CurrentlyPreparing from "./CurrentlyPreparing";
import { toast } from "react-toastify";

const CookingCart = ({ prepareItems, handleRemovefromPrepareItems }) => {
  const [cookingItems, setCookingItems] = useState([]);

  const handlePrepare = (recipe) => {
    setCookingItems([...cookingItems, recipe]);
    handleRemovefromPrepareItems(recipe);
  };
  return (
    <div className="flex w-full flex-col gap-16 self-start rounded-2xl border border-sky-200 bg-sky-50 px-2 py-6 md:px-4 md:py-10 lg:flex-row xl:w-5/12 xl:flex-col">
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
