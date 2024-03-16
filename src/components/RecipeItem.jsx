import { IoTimeOutline } from "react-icons/io5";
import { LiaBurnSolid } from "react-icons/lia";

const RecipeItem = () => {
  return (
    <div className="flex flex-col rounded-2xl border-2 border-sky-200 bg-sky-50 p-6">
      <img
        src="/recipe-item-cover.jpg"
        alt=""
        className="mb-6 h-48 w-full rounded-2xl object-cover"
      />
      <h3 className="min-h-16 gap-4 text-xl font-semibold text-sky-900">
        Spaghetti Bolognese
      </h3>
      <p className="min-h-16 pb-6 text-slate-500">
        Classic Italian pasta dish with savory meat sauce.
      </p>
      <div className="border-t border-sky-100 py-6">
        <h4 className="pb-4 text-lg font-bold text-sky-900">Ingredients: 6</h4>
        <ul className="flex flex-col gap-2 px-2 text-slate-500">
          <li>500g ground beef</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
        </ul>
      </div>
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center justify-center gap-2 text-lg font-bold text-sky-900">
          <IoTimeOutline />
          <p>30 minutes</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-lg font-bold text-sky-900">
          <LiaBurnSolid />
          <p>400 Calories</p>
        </div>
      </div>
      <button className="rounded-lg bg-sky-800 p-3 text-white duration-200 hover:bg-sky-900">
        Want to Cook
      </button>
    </div>
  );
};

export default RecipeItem;
