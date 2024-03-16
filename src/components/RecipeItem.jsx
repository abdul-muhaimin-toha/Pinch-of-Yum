import { IoTimeOutline } from "react-icons/io5";
import { LiaBurnSolid } from "react-icons/lia";
import PropTypes from "prop-types";

const RecipeItem = ({ recipe, handleWantToCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="flex flex-col rounded-2xl border-2 border-sky-200 bg-sky-50 p-6">
      <img
        src={recipe_image || "/recipe-item-cover.jpg"}
        alt=""
        className="mb-6 h-48 w-full rounded-2xl object-cover"
      />
      <h3 className="min-h-16 gap-4 text-xl font-semibold text-sky-900">
        {recipe_name || "Unknown"}
      </h3>
      <p className="min-h-16 pb-6 text-slate-500">
        {short_description || "Informatiion not available right now."}
      </p>
      <div className="border-t border-sky-100 py-6">
        <h4 className="pb-4 text-lg font-bold text-sky-900">
          Ingredients:{" "}
          {ingredients.length < 10
            ? `0${ingredients.length}`
            : ingredients.length}
        </h4>
        <ul className="flex min-h-48 flex-col gap-2 pl-2 text-slate-500">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <span className="mr-2">•</span>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center justify-center gap-2 text-lg font-bold text-sky-900">
          <IoTimeOutline />
          <p>{preparing_time} minutes</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-lg font-bold text-sky-900">
          <LiaBurnSolid />
          <p>{calories} Calories</p>
        </div>
      </div>
      <button
        onClick={() => handleWantToCook(recipe)}
        className="rounded-lg bg-sky-800 p-3 text-white duration-200 hover:bg-sky-900"
      >
        Want to Cook
      </button>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};

export default RecipeItem;
