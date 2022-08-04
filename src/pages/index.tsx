import type { HeadFC } from "gatsby";
import confetti from "canvas-confetti";
import * as React from "react";

const name = "Eliaz Bobadilla";
const username = "UltiRequiem";

const IndexPage = () => {
  return (
    <div className="flex justify-center content-center h-screen bg-blue-300">
      <main className="flex flex-col justify-center content-center">
        <h1 className="m-0 text-5xl lg:text-9xl">{name}</h1>

        <p className="text-2xl lg:text-5xl">
          Also know as{" "}
          <a
            onClick={() => confetti()}
            className="text-sky-900 hover:underline"
            target="_blank"
            href="https://ultirequiem.com"
            rel="noreferrer"
          >
            {username}
          </a>
        </p>
      </main>
    </div>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>
      {name} - {username}
    </title>

    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
    />
  </>
);

export default IndexPage;
