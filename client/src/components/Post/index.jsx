import React from "react";
import { Card, Username } from "./style";

const Post = ({ data }) => {
  return (
    <Card>
      <h1>{data.title}</h1>
      <hr />
      <p>{data.body}</p>
      <Username>
        {data.user.name} | <strong>{data.user.company.name}</strong>
      </Username>
    </Card>
  );
};

export default Post;
