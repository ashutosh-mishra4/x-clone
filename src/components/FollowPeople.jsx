import React, { useState, useEffect } from "react";
import { mockTweets } from "../mockData";

function FollowPeople() {
  const [people, setPeople] = useState([]);
  const firstThreePeople = mockTweets.slice(0, 3);
  useEffect(() => {
    setPeople(firstThreePeople);
  }, []);

  return (
    <section className="bg-slate-50 flex flex-col gap-2 w-72 ml-4 p-4">
      <p className="font-bold text-xl">Who to Follow?</p>
      {people.map((account) => {
        return (
          <article
            key={account.id}
            className="flex items-center justify-between"
          >
            <img
              src={account.profileImage}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p>{account.name}</p>
              <p>@{account.username}</p>
            </div>
            <button className="bg-black text-white font-bold rounded-full px-4 py-1">
              Follow
            </button>
          </article>
        );
      })}
    </section>
  );
}

export default FollowPeople;
