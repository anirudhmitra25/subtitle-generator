import { useEffect } from "react";
import { FaBold, FaItalic } from "react-icons/fa";
import { MdFormatColorText } from "react-icons/md";
import { IoMdColorFill } from "react-icons/io";
import { RiFontSize } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Formik, Form, Field } from "formik";
import { ISubtitleStylingTable } from "../types";

export default function SubtitleStylingTable({
  onChange,
}: ISubtitleStylingTable) {
  return (
    <Formik
      initialValues={{
        bgColor: "#000000",
        textColor: "#FFFFFF",
        fontSize: "20px",
        bold: false,
        italic: false,
      }}
      onSubmit={() => {}}
    >
      {({ values, setFieldValue }) => {
        useEffect(() => {
          onChange(values);
        }, [values]);

        return (
          <Form className="mx-5 flex flex-row justify-between items-center overflow-x-auto">
            <div className="flex items-center">
              <label htmlFor="bgColor">
                <IoMdColorFill className="text-xl" />
              </label>
              <Field
                type="color"
                name="bgColor"
                className="p-1 mx-3 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
                id="bgColor"
                title="Choose your color"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="textColor mr-2">
                <MdFormatColorText className="text-xl" />
              </label>
              <Field
                type="color"
                name="textColor"
                className="p-1 mx-3 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
                id="textColor"
                title="Choose your color"
              />
            </div>
            <div className="flex flex-row px-5 py-2 rounded-lg bg-black">
              <button
                style={{
                  backgroundColor: values.bold ? "#FFFFFF" : "#000000",
                  color: values.bold ? "#000000" : "#FFFFFF",
                }}
                type="button"
                onClick={() => {
                  setFieldValue("bold", !values.bold);
                }}
                className="p-3 rounded-lg mr-2"
              >
                <FaBold className="text-lg" />
              </button>

              <button
                type="button"
                style={{
                  backgroundColor: values.italic ? "#FFFFFF" : "#000000",
                  color: values.italic ? "#000000" : "#FFFFFF",
                }}
                onClick={() => {
                  setFieldValue("italic", !values.italic);
                }}
                className="p-3 rounded-lg ml-2"
              >
                <FaItalic className="text-lg" />
              </button>
            </div>
            <div className="flex flex-row items-center">
              <RiFontSize className="text-xl font-semibold" />
              <Field
                name="fontSize"
                className="bg-transparent text-gray-200 placeholder-gray-500 text-md text-right rounded-2xl block !outline-none h-10 px-2 w-20 mr-3"
              />
              <div className="flex flex-col">
                <button
                  type="button"
                  onMouseDown={() => {
                    const newFontSize = parseInt(values.fontSize) + 1 + "px";
                    setFieldValue("fontSize", newFontSize);
                  }}
                  className="text-lg my-1"
                >
                  <IoIosArrowUp className="text-2xl hover:text-gray-400" />
                </button>
                <button
                  type="button"
                  onMouseDown={() => {
                    const newFontSize =
                      Math.max(parseInt(values.fontSize) - 1, 0) + "px";
                    setFieldValue("fontSize", newFontSize);
                  }}
                  className="my-1"
                >
                  <IoIosArrowDown className="text-2xl hover:text-gray-400" />
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
