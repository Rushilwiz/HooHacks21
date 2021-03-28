import React, { useState, useEffect } from "react";

const Posts = (props) => {
  const [state, setState] = useState({
    user: { username: "" },
    posts: [
      {
        id: 1,
        upvotes: 2,
        text: "Action for Climate Change",
        comments: 0,
        topics: ["climate change", "air pollution"],
      },
    ],
  });

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const callAPI = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/posts/`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data !== undefined) {
          setState(data);
        }
      });
  };

  useEffect(() => {
    callAPI();
  }, []);
  const maybePluralize = (count, noun, suffix = "s") =>
    `${count} ${noun}${count !== 1 ? suffix : ""}`;
  return (
    <div>
      <h1
        className="d-flex justify-content-center p-4"
        style={{ backgroundColor: "#F1EAE8" }}
      >
        Posts
      </h1>
      <a className="btn btn-large btn-success" href="/createpost">
        Create Post
      </a>
      <div className="container">
        <br></br>
        <h1>Hello {state.user.username}!</h1>
        {state.posts.map((post) => {
          return (
            <div
              className="card card-body text-left"
              style={{ backgroundColor: "#F1EAE8" }}
            >
              <a href={"/post/" + post.id} className="card-title">
                {post.text}
              </a>
              <p className="text-success">+{post.upvotes}</p>
              <p className="text-warning">
                {maybePluralize(post.comments, "comment")}
              </p>
              <div className="d-flex">
                {post.topics.map((topic) => {
                  return (
                    <div
                      className="text-left mr-3 p-2 d-inline-block"
                      style={{ backgroundColor: "#D6D1D0" }}
                    >
                      <p>{topic}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
