import PropTypes from "prop-types";
import PrepareItem from "./PrepareItem";

const CurrentlyPreparing = ({ prepareItems, handlePrepare }) => {
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
              <th className="texy-xs hidden font-semibold md:block md:text-sm"></th>
              <th className="texy-xs font-semibold md:text-sm">Name</th>
              <th className="texy-xs font-semibold md:text-sm">Time</th>
              <th className="texy-xs font-semibold md:text-sm">Calories</th>
              <th className="texy-xs font-semibold md:text-sm"></th>
            </tr>
          </thead>
          <tbody>
            {prepareItems.map((prepareItem, index) => (
              <PrepareItem
                prepareItem={prepareItem}
                key={prepareItem.recipe_id}
                index={index}
                handlePrepare={handlePrepare}
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
  handlePrepare: PropTypes.func.isRequired,
};

export default CurrentlyPreparing;
