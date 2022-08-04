import * as React from "react";
import { HeadFC } from "gatsby";

const NotFoundPage = () => {
  return <main>Sorry 😔, we couldn’t find what you were looking for.</main>;
};

export const Head: HeadFC = () => <title>Not found</title>;

export default NotFoundPage;
