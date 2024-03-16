import PrepareItem from "./PrepareItem";

const CurrentlyPreparing = () => {
  return (
    <div className="flex flex-col text-center">
      <h4 className=" text-2xl font-bold text-sky-900">Want to Cook: 01</h4>
      <div className="mt-8 overflow-x-auto">
        <table className="table">
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
            <PrepareItem></PrepareItem>
            <PrepareItem></PrepareItem>
            <PrepareItem></PrepareItem>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentlyPreparing;
