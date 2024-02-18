import React from "react";

const AboutPage = () => {
  return (
    <>
      <h1 className="text-5xl mb-4">
        GitHunt - a searchable GitHub application
      </h1>
      <p className="mb-4 text-2xl font-light text-white">
        A simple React application that allows users to search any profile on
        GitHub, and view the user's existing repos and stats.
      </p>
      <p className="mb-4 text-2xl font-light text-white">
        Styled with Tailwinds CSS and Daisy UI.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Created by:&nbsp;
        <a className="text-white" href="https://github.com/mspassov">
          Martin Spassov
        </a>
      </p>
    </>
  );
};

export default AboutPage;
