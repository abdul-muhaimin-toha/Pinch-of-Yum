import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CookingCart from "./CookingCart";
import RecipeItem from "./RecipeItem";

const OurRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [prepareItems, setPrepareItems] = useState([]);

  useEffect(() => {
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCook = (recipe) => {
    const isalreadyAdded = prepareItems.find(
      (item) => item.recipe_id === recipe.recipe_id,
    );
    if (!isalreadyAdded) setPrepareItems([...prepareItems, recipe]);
    else return toast.error("Already Added");
  };

  const handleRemovefromPrepareItems = (recipe) => {
    const afterRemoved = prepareItems.filter(
      (prepareItem) => prepareItem.recipe_id !== recipe.recipe_id,
    );
    setPrepareItems(afterRemoved);
  };

  return (
    <main>
      <div className="mx-auto max-w-8xl px-4">
        <div className="mb-24 flex flex-col">
          <div className="flex max-w-3xl flex-col items-center justify-center gap-6 self-center pb-12 text-center">
            <h3 className="text-4xl font-semibold text-sky-900">Our Recipes</h3>
            <p className="text-slate-500">
              Embark on a flavorful journey with Pinch of Yum, where each recipe
              is a culinary masterpiece waiting to be discovered. Join our
              community and savor the taste of homemade delights from around the
              world.
            </p>
          </div>
          <div className="flex gap-6 ">
            <div className="grid w-7/12 grid-cols-2 gap-6">
              {recipes.map((recipe) => (
                <RecipeItem
                  recipe={recipe}
                  handleWantToCook={handleWantToCook}
                  key={recipe.recipe_id}
                ></RecipeItem>
              ))}
            </div>
            <CookingCart
              prepareItems={prepareItems}
              handleRemovefromPrepareItems={handleRemovefromPrepareItems}
            ></CookingCart>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurRecipes;
