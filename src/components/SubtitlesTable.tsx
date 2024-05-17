import React from "react";
import AddSubComponent from "./AddSubComponent";
import { ISubtitle, ISubtitleTable } from "../types";

const SubtitleTable = ({ subtitles, updateSubtitles }: ISubtitleTable) => {
  const handleContentChange = (
    index: number,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newSubtitles = [...subtitles];
    newSubtitles[index].content = event.target.value;
    updateSubtitles(newSubtitles);
  };

  const handleStartTimeChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSubtitles = [...subtitles];
    newSubtitles[index].startTime = event.target.value;
    updateSubtitles(newSubtitles);
  };

  const handleEndTimeChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSubtitles = [...subtitles];

    newSubtitles[index].endTime = event.target.value;
    updateSubtitles(newSubtitles);
  };

  const handleCreateSubtitle = () => {
    const newSubtitles = [
      ...subtitles,
      { startTime: "00:00:00", endTime: "00:00:00", content: "" },
    ];
    updateSubtitles(newSubtitles);
  };

  const handleIncreaseTime = (index: number, key: keyof ISubtitle) => {
    const newSubtitles = [...subtitles];
    let currTime = newSubtitles[index][key];
    let [hours, minutes, seconds] = currTime.split(":").map(Number);

    seconds += 1;

    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours += 1;
    }
    if (hours >= 24) {
      hours = 0;
    }
    const formatWithLeadingZeros = (num: number) =>
      num.toString().padStart(2, "0");

    newSubtitles[index][key] = `${formatWithLeadingZeros(
      hours
    )}:${formatWithLeadingZeros(minutes)}:${formatWithLeadingZeros(seconds)}`;

    updateSubtitles(newSubtitles);
  };
  const handleDecreaseTime = (index: number, key: keyof ISubtitle) => {
    const newSubtitles = [...subtitles];
    let currTime = newSubtitles[index][key];
    let [hours, minutes, seconds] = currTime.split(":").map(Number);

    if (seconds === 0 && hours === 0 && minutes === 0) {
      return;
    }
    seconds -= 1;
    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours += 1;
    }
    if (hours >= 24) {
      hours = 0;
    }
    const formatWithLeadingZeros = (num: number) =>
      num.toString().padStart(2, "0");

    newSubtitles[index][key] = `${formatWithLeadingZeros(
      hours
    )}:${formatWithLeadingZeros(minutes)}:${formatWithLeadingZeros(seconds)}`;

    updateSubtitles(newSubtitles);
  };

  const handleRemoveSubtitle = (index: number) => {
    const newSubtitles = [...subtitles];
    newSubtitles.splice(index, 1);
    updateSubtitles(newSubtitles);
  };

  return (
    <div className="w-full h-1/2 flex flex-col justify-between mt-5">
      <div>
        <div className="w-full">
          <div>
            <div className="w-2/4 text-left font-semibold text-gray-500 text-2xl">
              Subtitles
            </div>
            <div className=" w-2/3 h-1 border-b-2 border-white mt-3 opacity-15"></div>
          </div>
          <div
            style={{
              maxHeight: "38em",
            }}
            className="overflow-y-auto"
          >
            {subtitles.map((subtitle: ISubtitle, index: number) => (
              <AddSubComponent
                key={index}
                handleContentChange={handleContentChange}
                handleStartTimeChange={handleStartTimeChange}
                handleIncreaseTime={handleIncreaseTime}
                handleDecreaseTime={handleDecreaseTime}
                handleEndTimeChange={handleEndTimeChange}
                handleRemoveSubtitle={handleRemoveSubtitle}
                subtitle={subtitle}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      {subtitles.length === 0 && (
        <div className="mx-auto my-10 font-semibold">
          Start adding subtitles..
        </div>
      )}
      <button
        onClick={handleCreateSubtitle}
        className="mt-4 rounded-lg py-2 text-lg font-semibold bg-neutral-600 hover:bg-neutral-900 transition ease-in-out text-gray-300"
      >
        + Add new subtitle line
      </button>
    </div>
  );
};

export default SubtitleTable;
