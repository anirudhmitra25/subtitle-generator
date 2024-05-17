import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiStopwatch } from "react-icons/ci";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { validateTimeFormat, convertTime } from "../helper";
import { IAddSubComponent } from "../types";

export default function AddSubComponent({
  handleContentChange,
  handleStartTimeChange,
  handleIncreaseTime,
  handleDecreaseTime,
  handleEndTimeChange,
  handleRemoveSubtitle,
  subtitle,
  index,
}: IAddSubComponent) {
  const [error, setError] = useState("");

  useEffect(() => {
    if (
      !validateTimeFormat(subtitle.startTime) ||
      !validateTimeFormat(subtitle.endTime)
    ) {
      setError("Enter a valid time (hh:mm:ss)");
    } else if (
      convertTime(subtitle.startTime) > convertTime(subtitle.endTime)
    ) {
      setError("Start Time can't be Greater than end time");
    } else {
      setError("");
    }
  }, [subtitle.startTime, subtitle.endTime, subtitle.content]);
  return (
    <>
      <div key={index} className="h-28 flex flex-row my-5">
        <div className="h-full w-3/5">
          <textarea
            value={subtitle.content}
            onChange={(e) => handleContentChange(index, e)}
            className="bg-transparent text-gray-200 placeholder-gray-500 text-lg rounded-2xl !outline-none block w-full px-2"
            placeholder="New Text.."
          />
        </div>
        <div className="flex flex-col w-2/5">
          <div className="flex flex-row">
            <div className="flex items-center text-sm px-2">
              <CiStopwatch className=" mr-1" />
              In
            </div>

            <input
              type="text"
              value={subtitle.startTime}
              onChange={(e) => handleStartTimeChange(index, e)}
              className="bg-transparent text-gray-200 placeholder-gray-500 text-md text-right rounded-2xl !outline-none block w-full px-2"
            />
            <div className="flex flex-col">
              <button className="text-lg my-1">
                <CiCirclePlus
                  onMouseDown={() => handleIncreaseTime(index, "startTime")}
                  className="text-xl hover:text-gray-400"
                />
              </button>
              <button className="text-lg my-1">
                <CiCircleMinus
                  onMouseDown={() => handleDecreaseTime(index, "startTime")}
                  className="text-xl hover:text-gray-400"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex items-center text-sm px-2">
              <CiStopwatch className=" mr-1" />
              Out
            </div>
            <input
              type="text"
              value={subtitle.endTime}
              onChange={(e) => handleEndTimeChange(index, e)}
              className="bg-transparent text-gray-200 placeholder-gray-500 text-md text-right rounded-2xl !outline-none block w-full px-2"
            />
            <div className="flex flex-col">
              <button
                onMouseDown={() => handleIncreaseTime(index, "endTime")}
                className="text-lg my-1"
              >
                <CiCirclePlus className="text-xl hover:text-gray-400" />
              </button>
              <button
                onMouseDown={() => handleDecreaseTime(index, "endTime")}
                className="my-1"
              >
                <CiCircleMinus className="text-xl hover:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center">
          <button
            onClick={() => handleRemoveSubtitle(index)}
            className=" hover:text-red-400 text-2xl my-auto mx-3"
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
      <div>{error && <span className="text-red-500">{error}</span>}</div>
    </>
  );
}
