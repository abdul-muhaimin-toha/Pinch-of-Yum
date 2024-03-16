import PropTypes from "prop-types";
import PrepareItem from "./PrepareItem";

const CurrentlyPreparing = ({ prepareItems }) => {
  return (
    <div className="flex flex-col text-center">
      <h4 className=" text-2xl font-bold text-sky-900">
        Want to Cook:{" "}
        {prepareItems.length
          ? prepareItems.length < 10
            ? `0${prepareItems.length}`
            : prepareItems.length
          : 0}
      </h4>
      <div className="mt-8 overflow-x-auto">
        <table className="table min-h-28 ">
          <thead className=" text-sky-900">
            <tr>
              <th className="text-sm font-semibold"></th>
              <th className="text-sm font-semibold">Name</th>
              <th className="text-sm font-semibold">Time</th>
              <th className="text-sm font-semibold">Calories</th>
              <th className="text-sm font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {prepareItems.map((prepareItem, index) => (
              <PrepareItem
                prepareItem={prepareItem}
                key={prepareItem.recipe_id}
                index={index}
              ></PrepareItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CurrentlyPreparing.propTypes = {
  prepareItems: PropTypes.array.isRequired,
};

export default CurrentlyPreparing;
