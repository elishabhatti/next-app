import { Suspense } from "react";
import DataCard from "./DataCard";

const DataFetchServer = async (props) => {
  const searchParams = await props.searchParams;
  const userName = searchParams.name;

  // Handle case where no name is provided
  if (!userName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              No Name Provided
            </h1>
            <p className="text-gray-600">
              Please add ?name=yourname to the URL
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 items-center justify-center gap-3 h-full">
      <div className="h-full flex justify-center items-center">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet
          saepe, debitis iste nostrum libero odit repellat labore, reiciendis
          quia rerum expedita. Consequatur suscipit perspiciatis cumque
          accusamus quo, dolore animi!
        </h1>
      </div>
      <Suspense fallback={<div>Loading</div> }>
      <DataCard userName={userName} />
      </Suspense>
    </div>
  );
};

export default DataFetchServer;
