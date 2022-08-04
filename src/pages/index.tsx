import type { HeadFC } from "gatsby";
import * as React from "react";

const IndexPage = () => {
  return <h1 className="text-3xl font-bold underline">Eliaz Bobadilla</h1>;
};

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
