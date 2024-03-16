import CookingItem from "./CookingItem";

const CurrentlyCooking = () => {
  return (
    <div className="flex flex-col text-center">
      <h4 className=" text-2xl font-bold text-sky-900">
        Currently cooking: 02
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
            <CookingItem></CookingItem>
            <CookingItem></CookingItem>
            <CookingItem></CookingItem>
          </tbody>
          <tfoot className=" text-sky-900">
            <tr>
              <th className="text-sm font-semibold"></th>
              <th className="text-sm font-semibold">Total = </th>
              <th className="text-sm font-semibold">90 Minutes</th>
              <th className="text-sm font-semibold"> 900 Calories</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CurrentlyCooking;
