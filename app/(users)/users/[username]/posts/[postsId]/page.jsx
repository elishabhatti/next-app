"use client";

import { use } from "react";

const SingleProfilePost = (props) => {
  const user = use(props.params);
  console.log(user);

  return (
    <h1>
      Dynamic {user.username}, PostId : {user.postsId}{" "}
    </h1>
  );
};

// Dynamic Route Segment can only be used in Server Component
export default SingleProfilePost;
