import CookingItem from "./CookingItem";
import PropTypes from "prop-types";

const CurrentlyCooking = ({ cookingItems }) => {
  return (
    <div className="flex flex-col text-center">
      <h4 className=" text-2xl font-bold text-sky-900">
        Currently cooking:{" "}
        {cookingItems.length
          ? cookingItems.length < 10
            ? `0${cookingItems.length}`
            : cookingItems.length
          : 0}
      </h4>
      <div className="mt-8 overflow-x-auto">
        <table className="table">
          <thead className=" text-sky-900">
            <tr>
              <th className="text-sm font-semibold"></th>
              <th className="text-sm font-semibold">Name</th>
              <th className="text-sm font-semibold">Time</th>
              <th className="text-sm font-semibold">Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookingItems.map((cookingItem, index) => (
              <CookingItem
                cookingItem={cookingItem}
                key={cookingItem.recipe_id}
                index={index}
              ></CookingItem>
            ))}
          </tbody>
          <tfoot className=" text-sky-900">
            <tr>
              <th className="text-sm font-semibold"></th>
              <th className="text-sm font-semibold">Total = </th>
              <th className="text-sm font-semibold">
                {cookingItems.reduce(
                  (sum, current) => sum + current.preparing_time,
                  0,
                )}{" "}
                Minutes
              </th>
              <th className="text-sm font-semibold">
                {" "}
                {cookingItems.reduce(
                  (sum, current) => sum + current.calories,
                  0,
                )}{" "}
                Calories
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  cookingItems: PropTypes.array.isRequired,
};

export default CurrentlyCooking;
