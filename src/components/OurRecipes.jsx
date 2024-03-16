import CookingCart from "./CookingCart";
import RecipeItem from "./RecipeItem";

const OurRecipes = () => {
  return (
    <main>
      <div className="mx-auto max-w-8xl px-4">
        <div className="mb-24 flex flex-col">
          <div className="flex max-w-3xl flex-col items-center justify-center gap-6 self-center pb-12 text-center">
            <h3 className="text-4xl font-semibold text-sky-900">Our Recipes</h3>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
              vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
              elementum mauris aenean neque.
            </p>
          </div>
          <div className="flex gap-6 ">
            <div className="grid w-7/12 grid-cols-2 gap-6">
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
            </div>
            <CookingCart></CookingCart>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurRecipes;
