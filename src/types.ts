export interface ISubtitle {
  startTime: string;
  endTime: string;
  content: string;
}

export interface IAddSubComponent {
  handleContentChange: (index: number, e: any) => void;
  handleStartTimeChange: (index: number, e: any) => void;
  handleIncreaseTime: (index: number, type: keyof ISubtitle) => void;
  handleDecreaseTime: (index: number, type: keyof ISubtitle) => void;
  handleEndTimeChange: (index: number, e: any) => void;
  handleRemoveSubtitle: (index: number) => void;
  subtitle: ISubtitle;
  index: number;
}
export interface ISearch {
  onChange: (data: any) => void;
  value: string;
}

export interface ISubtitleTable {
  subtitles: Array<ISubtitle>;
  updateSubtitles: (data: Array<ISubtitle>) => void;
}

export interface ISubtitleStylingTable {
  onChange: (data: ISubStyles) => void;
}

export interface ISubStyles {
  bgColor: string;
  textColor: string;
  fontSize: string;
  bold: boolean;
  italic: boolean;
}

export interface IVideoPlayer {
  url: string;
  currentSubtitle: string | null;
  onTimeChange: (sec: number) => void;
  subStyles: ISubStyles | null;
}

export interface ILandingPage {
  subtitles: Array<ISubtitle>;
  updateSubtitles: (data: Array<ISubtitle>) => void;
}
