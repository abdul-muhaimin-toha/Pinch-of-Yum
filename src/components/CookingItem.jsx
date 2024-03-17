import PropTypes from "prop-types";

const CookingItem = ({ cookingItem, index }) => {
  const { recipe_name, preparing_time, calories } = cookingItem;
  return (
    <tr>
      <th className="hidden md:block">{index + 1}</th>
      <td className="text-xs md:text-sm">{recipe_name}</td>
      <td className="text-xs md:text-sm">{preparing_time} Minutes</td>
      <td className="text-xs md:text-sm">{calories} Calories</td>
    </tr>
  );
};

CookingItem.propTypes = {
  cookingItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CookingItem;
