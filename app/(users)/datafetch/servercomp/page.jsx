const DataFetchServer = async (props) => {
  const searchParams = await props.searchParams;
  const userName = searchParams.name;

  if (!userName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              No Name Provided
            </h1>
            <p className="text-gray-600">
              Please add <code>?name=yourname</code> to the URL <br />
              <span className="text-blue-500">"yourname"</span>: Unknown word.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const res = await fetch(`https://api.genderize.io/?name=${userName}`);
  const data = await res.json();
  console.log(data);
  const isMale = data.gender === 'male'
  const confidencePercentage = data.probability * 100;

  return (
    <h1>
      Data Fetching - {data.name} - {confidencePercentage}{" "}
    </h1>
  );
};

export default DataFetchServer;
