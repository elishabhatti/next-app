const SingleProfilePage = async (props) => {
  const user = await props.params;
  console.log(user);

  return <h1>Dynamic {user.username}</h1>;
};

export default SingleProfilePage;
