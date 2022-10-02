import React from "react";
import SendKudos from "./SendKudos";
import { useState, useEffect } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function KudosToday() {
  // Messages Board
  const [kudos, setKudos] = useState();

  //Send one back
  const [window, setWindow] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    console.log(this);
    setWindow(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      return await fetch(
        "http://localhost:5500/kudos/6339f0abeec6ba1cd487d882"
      );
    };

    fetchData()
      .then((res) => res.json())
      .then((data) => setKudos(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-orange-50">
      {kudos &&
        kudos.map(({ id, authorname, content }) => (
          <div key={id} className="flex flex-row p-3 border-b-2">
            <img
              src={`https://picsum.photos/id/${getRandomInt(50)}/200/200`}
              alt=""
              className="w-12 h-12 object-cover rounded-full align-middle"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                {/* Name tothe Left */}
                <h1 className="text-lg font-bold px-2">{authorname}</h1>

                {/* Buttons */}
                <div className="ButtonsToRight flex flex-row justify-end">
                  <span className="">
                    {/* SendKudos clicking is a hit or miss*/}

                    <button onClick={clicked} className="mx-auto">
                      <div className="w-max mx-auto">
                        <object
                          className="mx-auto my-auto"
                          type="image/svg+xml"
                          data="../images/reply.svg"
                        ></object>
                      </div>
                    </button>
                  </span>
                  <span>
                    {/* Add to ScrapBook */}
                    <button className="my-auto">
                      <div className="w-max">
                        <object
                          className="mx-auto my-auto"
                          type="image/svg+xml"
                          data="../images/favorite_border.svg"
                        ></object>
                      </div>
                    </button>
                  </span>
                </div>
              </div>
              <h1 className="text-base text-slate-500 px-2">{content}</h1>
            </div>
          </div>
        ))}

      {window && <SendKudos setChoice={setChoice} setWindow={setWindow} />}
    </div>
  );
}

export default KudosToday;
