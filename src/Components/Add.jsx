import React, { useState } from "react";
import Color from "./Color";

export default function Add({ onAddNote }) {
  const [showTextarea, setShowTextarea] = useState(false);
  const [textareaContent, setTextareaContent] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showColorOptions, setShowColorOptions] = useState(false);

  const handleShowTextarea = () => {
    setShowTextarea((prevShowTextarea) => !prevShowTextarea);
  };

  const handleTextareaChange = (e) => {
    setTextareaContent(e.target.value);
  };

  const handleColorButtonClick = () => {
    setShowColorOptions((prevShowColorOptions) => !prevShowColorOptions);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColorOptions(false);  
  };

  const handleAddNote = () => {
    onAddNote({ content: textareaContent, color: selectedColor });
    setTextareaContent("");
    setSelectedColor("");
    setShowTextarea(false);
  };

  return (
    <div>
      <div className="relative">
        <div
          className="border border-black w-10 h-10 rounded-full bg-black text-white text-2xl  ml-24 mt-12 cursor-pointer"
          onClick={handleShowTextarea}
        >
          +
        </div>

        {showTextarea && (
          <div className="absolute top-[50px]  w-96">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={textareaContent}
              onChange={handleTextareaChange}
              className={`border border-black p-2 ${selectedColor}`}
              style={{ backgroundColor: "white" }}
            />

            <div className="flex ml-[120px]">
              <button
                className={`p-2 w-16 bg-sky-300 rounded `}
                onClick={handleColorButtonClick}
              >
                Color
              </button>
              <button
                className="bg-green-500 p-2 ml-3 w-16 rounded"
                onClick={handleAddNote}
              >
                Add
              </button>
            </div>

            {showColorOptions && <Color onSelectColor={handleColorSelect} />}
          </div>
        )}
      </div>
    </div>
  );
}
