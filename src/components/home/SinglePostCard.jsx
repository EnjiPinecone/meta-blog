import React from "react";
import { format } from "date-fns";

export default function SinglePostCard({ title, image, tags, edited_at }) {
  return (
    <div className="w-full border rounded-xl p-3">
      <img src={image} className="w-full h-80 object-cover rounded-xl" />
      <div className="space-y-4 mt-5">
        <div className="flex gap-1 text-xs">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="text-[#4B6BFB] rounded-md bg-gray-100 py-1 px-2.5"
            >
              {tag}
            </div>
          ))}
        </div>
        <h3 className=" text-lg font-bold">{title}</h3>
        <span className="text-[#97989F] text-sm">
          {format(new Date(edited_at), "MMMM d, yyy")}
        </span>
      </div>
    </div>
  );
}
