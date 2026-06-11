import React, { useEffect } from "react";

function NestedComments() {
    const data = [
        {
            id: 1,
            name: "comment 1",
            replies: [
                {
                    id: 2,
                    name: "replies of comment 1",
                    replies: [
                        {
                        id: 3,
                        name: "reply of reply of comment 1",
                        replies: [
                            {
                            id: 999,
                            name: "nested reply",
                            replies: [],
                            },
                        ],
                        },
                    ],
                },
             ],
        },
        {
            id: 4,
            name: "comment 2",
            replies: [],
        },
        {
            id: 5,
            name: "comment 3",
            replies: [
                {
                id: 6,
                name: "nested of comment 3",
                replies: [],
                },
            ],
        },
    ];

//   useEffect(() => {
//     console.log(data);
//   });

  return (
    <>
      <h2>Nested Comments</h2>

      {data.map((comment) => (
        <div>
          <ChildComponent key={comment.id} comment={comment} />
        </div>
      ))}
    </>
  );
}

export default NestedComments;


function ChildComponent({ comment }) {
    useEffect(() => {
        console.log(comment, "comment");
    });
    return (
        <div
            style={{
                marginLeft: "20px",
                paddingLeft: "10px",
                borderLeft: "1px solid gray",
                marginTop: "20px",
            }}>
            <p>{comment.name}</p>

            {comment.replies.map((reply) => (
                <ChildComponent key={reply.id} comment={reply} />
            ))}
        </div>
    );
}
