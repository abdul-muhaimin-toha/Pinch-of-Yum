import CurrentlyCooking from "./CurrentlyCooking";
import CurrentlyPreparing from "./CurrentlyPreparing";

const CookingCart = () => {
  return (
    <div className="flex w-5/12 flex-col gap-16 self-start rounded-2xl border border-sky-200 px-4 py-10">
      <CurrentlyPreparing></CurrentlyPreparing>
      <CurrentlyCooking></CurrentlyCooking>
    </div>
  );
};

export default CookingCart;
