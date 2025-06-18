const SingleProfilePost = async (props) => {
  const user = await props.params;
  console.log(user);

  return (
    <h1>
      Dynamic {user.username}, PostId : {user.postsId}{" "}
    </h1>
  );
};

// Dynamic Route Segment can only be used in Server Component
export default SingleProfilePost;
