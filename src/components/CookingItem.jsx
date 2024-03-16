import PropTypes from "prop-types";

const CookingItem = ({ cookingItem, index }) => {
  const { recipe_name, preparing_time, calories } = cookingItem;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} Minutes</td>
      <td>{calories} Calories</td>
    </tr>
  );
};

CookingItem.propTypes = {
  cookingItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CookingItem;
