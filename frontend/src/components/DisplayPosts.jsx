import React from "react";
import { useState, useEffect } from "react";
import MakePost from "./MakePost";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function DisplayPosts() {
  const [posts, setPosts] = useState();

  // Modal for Make Post
  const [window, setWindow] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    console.log(this);
    setWindow(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      return await fetch("http://localhost:5500/posts");
    };

    fetchData()
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className=" min-h-screen  bg-gradient-to-b from-slate-50 to-blue-100">
      {/* Change post */}
      <div className="flex py-2 justify-end" onClick={clicked}>
        <object
          className=""
          type="image/svg+xml"
          data="../images/add_box.svg"
        ></object>
      </div>

      {posts &&
        posts.map(({ id, authorname, createdAt, content }) => (
          <div key={id} className="flex flex-row p-3 border-b-2">
            <img
              src={`https://picsum.photos/id/${getRandomInt(50)}/200/200`}
              alt=""
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <h1 className="text-lg font-bold px-2">{authorname}</h1>
                <h1 className="text-md px-2 text-gray-500">
                  {createdAt.split("T")[0]}
                </h1>
              </div>
              <h1 className="text-base text-slate-500 px-2">{content}</h1>
              <div className="flex justify-end">
                {/* {Buttons} */}
                <button className="bg-[#DAF0F7] rounded-md float-right sendkudos text-base text-slate-500 px-2">
                  Send Kudos
                </button>

                <button className="my-auto mx-1">
                  <div className="w-max">
                    <object
                      className="mx-auto my-auto"
                      type="image/svg+xml"
                      data="../images/favorite_border.svg"
                    ></object>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}

      {/* To dynamically create stuff - Save for later when you have a template ready! */}

      {window && <MakePost setChoice={setChoice} setWindow={setWindow} />}
    </div>
  );
}

export default DisplayPosts;
