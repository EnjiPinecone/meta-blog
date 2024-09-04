import React from "react";
import { format } from "date-fns";

export default function SinglePostCard({ title, image, tags, edited_at }) {
  return (
    <div className="w-full border rounded-xl h-[455px] flex flex-col justify-between">
      <img src={image} className="w-full object-cover rounded-xl h-[240px] p-3" />
      <div className="flex flex-col gap-5 p-4">
        <div className="flex gap-1 text-sm">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="text-[#4B6BFB] rounded-md bg-gray-100 py-1 px-2.5"
            >
              {tag}
            </div>
          ))}
        </div>
        <h3 className=" text-2xl font-bold h-[90px]">{title}</h3>
        <span className="text-[#97989F] text-sm ">
          {format(new Date(edited_at), "MMMM d, yyy")}
        </span>
      </div>
    </div>
  );
}
