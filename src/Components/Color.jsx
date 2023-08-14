import React from "react";

export default function Color({ onSelectColor }) {
  const colors = [
    "bg-pink-300",
    "bg-orange-300",
    "bg-green-300",
    "bg-purple-300",
    "bg-gray-300",
    "bg-sky-300",
  ];

  return (
    <div className="flex mt-4   pl-16">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`flex flex-col w-8 h-8 rounded-full ${color} mr-2 cursor-pointer`}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
}
