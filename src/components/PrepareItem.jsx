import PropTypes from "prop-types";

const PrepareItem = ({ prepareItem, index, handlePrepare }) => {
  const { recipe_name, preparing_time, calories } = prepareItem;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} Minutes</td>
      <td> {calories} Calories</td>
      <td>
        <button
          onClick={() => handlePrepare(prepareItem)}
          className="rounded-md bg-sky-800 p-3  font-semibold text-white duration-200 hover:bg-sky-900"
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
