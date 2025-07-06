const ServerComponent = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(URL);
  const data = await res.json();  

  return (
    <>
      <h1 className="font-roboto text-2xl text-white">Server Component</h1>
      <ul className="grid grid-cols-3">
        {data.map((cur, index) => {
          return (
            <li className="m-5" key={cur.id}>
              <div>UserId : {cur.userId}</div>
              <div>Title: {cur.title}</div>
              <div>Body: {cur.body}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ServerComponent;
