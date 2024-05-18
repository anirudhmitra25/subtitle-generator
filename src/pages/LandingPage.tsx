import { useState } from "react";
import {
  Search,
  SubtitleStylingTable,
  SubtitleTable,
  VideoPlayer,
} from "../components";
import { connect } from "react-redux";
import { storeURL, updateSubtitles } from "../redux/actions";
import { convertTime } from "../helper";
import { ILandingPage, ISubStyles, ISubtitle } from "../types";

function LandingPage({ updateSubtitles, subtitles }: ILandingPage) {
  const [urlData, setUrlData] = useState("");
  const [subStyles, setSubStyles] = useState<ISubStyles | null>(null);
  const [currentSubtitle, setCurrentSubtitle] = useState<string | null>(null);

  function handleUrlChange(e: any) {
    setUrlData(e.target.value);
  }

  function onTimeChange(duration: number) {
    if (duration && subtitles.length > 0) {
      const data = subtitles.filter(
        (subData: ISubtitle) =>
          convertTime(subData.startTime) <= duration &&
          convertTime(subData.endTime) >= duration
      );
      if (data.length > 0) {
        setCurrentSubtitle(data[0].content);
      } else {
        setCurrentSubtitle(null);
      }
    }
  }

  function onStylesChange(data: ISubStyles) {
    setSubStyles(data);
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="md:w-2/3 w-full h-full flex flex-col">
          <div className="my-10 px-5">
            <Search onChange={handleUrlChange} value={urlData} />
          </div>
          <div className="px-5 mt-10 flex-1">
            <VideoPlayer
              subStyles={subStyles}
              url={urlData}
              onTimeChange={onTimeChange}
              currentSubtitle={currentSubtitle}
            />
          </div>
        </div>
        <div className="md:w-1/3 w-full h-full py-8 px-3 my-5">
          <div className="w-full mt-10">
            <SubtitleTable
              subtitles={subtitles}
              updateSubtitles={updateSubtitles}
            />
          </div>
        </div>
      </div>
      <div className="my-5 px-5 w-full md:max-w-5xl mx-auto bg-neutral-700 rounded-lg py-3">
        <SubtitleStylingTable onChange={onStylesChange} />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  url: state.url,
  subtitles: state.subtitles,
});

const mapDispatchToProps = {
  storeURL,
  updateSubtitles,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
