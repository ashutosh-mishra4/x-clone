import { mockTweets } from "../mockData";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { BsHeart } from "react-icons/bs";
import React, { useState, useEffect } from "react";

function PublicFeed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setTweets(mockTweets);
  }, []);

  return (
    <>
      <section className="sm:ml-20 mb-12">
        {tweets.map((tweet) => {
          return (
            <article
              key={tweet.id}
              className="m-auto flex border-b-2 sm:border-x-2 border-slate-100 p-2 gap-4 font-display max-w-lg cursor-pointer"
            >
              <img
                src={tweet.profileImage}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="gap-4">
                  <div className="flex gap-2">
                    <p className="font-bold truncate">{tweet.name}</p>
                    <p className="truncate text-lightGray">@{tweet.username}</p>
                    <p className="text-lightGray truncate">• {tweet.date}</p>
                  </div>
                  <p className="flex flex-wrap">{tweet.content}</p>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <FaRegComment />
                      <p>{tweet.reply}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRetweet />
                      <p>{tweet.retweets}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsHeart />
                      <p>{tweet.likes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default PublicFeed;
