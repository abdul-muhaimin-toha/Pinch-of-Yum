import PropTypes from "prop-types";

const PrepareItem = ({ prepareItem, index, handlePrepare }) => {
  const { recipe_name, preparing_time, calories } = prepareItem;
  return (
    <tr>
      <th className="hidden md:block">{index + 1}</th>
      <td className="text-xs md:text-sm">{recipe_name}</td>
      <td className="text-xs md:text-sm">{preparing_time} Minutes</td>
      <td className="text-xs md:text-sm"> {calories} Calories</td>
      <td>
        <button
          onClick={() => handlePrepare(prepareItem)}
          className="rounded-md bg-sky-800 p-1.5 text-xs  font-semibold text-white  duration-200 hover:bg-sky-900 md:p-3 md:text-sm"
        >
          Prepare
        </button>
      </td>
    </tr>
  );
};

PrepareItem.propTypes = {
  prepareItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handlePrepare: PropTypes.func.isRequired,
};

export default PrepareItem;
