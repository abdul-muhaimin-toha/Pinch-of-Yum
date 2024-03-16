import CurrentlyCooking from "./CurrentlyCooking";
import CurrentlyPreparing from "./CurrentlyPreparing";
import PropTypes from "prop-types";

const CookingCart = ({ prepareItems }) => {
  return (
    <div className="flex w-5/12 flex-col gap-16 self-start rounded-2xl border border-sky-200 bg-sky-50 px-4 py-10">
      <CurrentlyPreparing prepareItems={prepareItems}></CurrentlyPreparing>
      <CurrentlyCooking></CurrentlyCooking>
    </div>
  );
};

CookingCart.propTypes = {
  prepareItems: PropTypes.array.isRequired,
};

export default CookingCart;
