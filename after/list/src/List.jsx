import React, { useEffect, useState } from "react";

const getComments = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((json) => json);
};

const List = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    setIsLoading(true);
    const response = await getComments(postId);
    setIsLoading(false);
    setComments(response);
  }, [postId]);

  if (isLoading)
    return (
      <div className="mt-10 mb-10l mx-auto max-w-6xl bg-yellow">Loading...</div>
    );

  if (comments.length === 0) return <div>No data!</div>;

  return (
    <div className="mt-10 mx-auto max-w-6xl">
      <h3>Post id: {postId}</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="border-slate-500 m-10 bg-slate-100">
          <div>
            <span className="font-semibold">Id:</span> {comment.id}
          </div>
          <div>
            <span className="font-semibold">Name:</span> {comment.name}
          </div>
          <div>
            <span className="font-semibold">Email:</span>
            <a
              className="decoration-1 text-indigo-900 "
              href={`mailto:${comment.email}`}
            >
              {comment.email}
            </a>
          </div>
          <div>
            <span className="font-semibold">Comment:</span> {comment.body}
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
