"use client";

import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * Resume Builder
 * npm i jspdf html2canvas
 */

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  summary: string;
  education: string;
  experience: string;
  skills: string;
  languages: string;
  image: string | null;
};

const themeStyles: Record<
  string,
  {
    heading: string;
    input: string;
    textarea: string;
    file: string;
    submit: string;
    submitHover?: string;
    selectedBtn: string;
    previewBtn: string;
  }
> = {
  theme1: {
    heading: "text-2xl font-bold text-center text-blue-600",
    input:
      "w-full p-2 border border-blue-400 rounded focus:ring-2 focus:ring-blue-500",
    textarea:
      "w-full p-2 border border-blue-400 rounded focus:ring-2 focus:ring-blue-500",
    file: "w-full p-2 border border-blue-400 rounded",
    submit: "w-full bg-blue-500 text-white p-2 rounded",
    submitHover: "hover:bg-blue-600",
    selectedBtn: "bg-blue-500 text-white",
    previewBtn: "bg-blue-500 text-white hover:bg-blue-600",
  },
  theme2: {
    heading: "text-2xl font-bold text-center text-red-600",
    input:
      "w-full p-2 border border-red-400 rounded focus:ring-2 focus:ring-red-500",
    textarea:
      "w-full p-2 border border-red-400 rounded focus:ring-2 focus:ring-red-500",
    file: "w-full p-2 border border-red-400 rounded",
    submit: "w-full bg-red-500 text-white p-2 rounded",
    submitHover: "hover:bg-red-600",
    selectedBtn: "bg-red-500 text-white",
    previewBtn: "bg-red-500 text-white hover:bg-red-600",
  },
  theme3: {
    heading: "text-2xl font-bold text-center text-green-600",
    input:
      "w-full p-2 border border-green-400 rounded focus:ring-2 focus:ring-green-500",
    textarea:
      "w-full p-2 border border-green-400 rounded focus:ring-2 focus:ring-green-500",
    file: "w-full p-2 border border-green-400 rounded",
    submit: "w-full bg-green-500 text-white p-2 rounded",
    submitHover: "hover:bg-green-600",
    selectedBtn: "bg-green-500 text-white",
    previewBtn: "bg-green-500 text-white hover:bg-green-600",
  },
  theme4: {
    heading: "text-2xl font-bold text-center text-purple-600",
    input:
      "w-full p-2 border border-purple-400 rounded focus:ring-2 focus:ring-purple-500",
    textarea:
      "w-full p-2 border border-purple-400 rounded focus:ring-2 focus:ring-purple-500",
    file: "w-full p-2 border border-purple-400 rounded",
    submit: "w-full bg-purple-500 text-white p-2 rounded",
    submitHover: "hover:bg-purple-600",
    selectedBtn: "bg-purple-500 text-white",
    previewBtn: "bg-purple-500 text-white hover:bg-purple-600",
  },
  theme5: {
    heading: "text-2xl font-bold text-center text-emerald-600",
    input:
      "w-full p-2 border border-emerald-400 rounded focus:ring-2 focus:ring-emerald-500",
    textarea:
      "w-full p-2 border border-emerald-400 rounded focus:ring-2 focus:ring-emerald-500",
    file: "w-full p-2 border border-emerald-400 rounded",
    submit: "w-full bg-emerald-500 text-white p-2 rounded",
    submitHover: "hover:bg-emerald-600",
    selectedBtn: "bg-emerald-500 text-white",
    previewBtn: "bg-emerald-500 text-white hover:bg-emerald-600",
  },
  theme6: {
    heading: "text-2xl font-bold text-center text-yellow-600",
    input:
      "w-full p-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500",
    textarea:
      "w-full p-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500",
    file: "w-full p-2 border border-yellow-400 rounded",
    submit: "w-full bg-yellow-500 text-white p-2 rounded",
    submitHover: "hover:bg-yellow-600",
    selectedBtn: "bg-yellow-500 text-white",
    previewBtn: "bg-yellow-500 text-white hover:bg-yellow-600",
  },
  theme7: {
    heading: "text-2xl font-bold text-center text-gray-600",
    input:
      "w-full p-2 border border-gray-400 rounded focus:ring-2 focus:ring-gray-500",
    textarea:
      "w-full p-2 border border-gray-400 rounded focus:ring-2 focus:ring-gray-500",
    file: "w-full p-2 border border-gray-400 rounded",
    submit: "w-full bg-gray-700 text-white p-2 rounded",
    submitHover: "hover:bg-gray-600",
    selectedBtn: "bg-gray-700 text-white",
    previewBtn: "bg-gray-700 text-white hover:bg-gray-600",
  },
  theme8: {
    heading: "text-2xl font-bold text-center text-pink-600",
    input:
      "w-full p-2 border border-pink-400 rounded focus:ring-2 focus:ring-pink-500",
    textarea:
      "w-full p-2 border border-pink-400 rounded focus:ring-2 focus:ring-pink-500",
    file: "w-full p-2 border border-pink-400 rounded",
    submit: "w-full bg-pink-500 text-white p-2 rounded",
    submitHover: "hover:bg-pink-600",
    selectedBtn: "bg-pink-500 text-white",
    previewBtn: "bg-pink-500 text-white hover:bg-pink-600",
  },
  theme9: {
    heading: "text-2xl font-bold text-center text-indigo-600",
    input:
      "w-full p-2 border border-indigo-400 rounded focus:ring-2 focus:ring-indigo-500",
    textarea:
      "w-full p-2 border border-indigo-400 rounded focus:ring-2 focus:ring-indigo-500",
    file: "w-full p-2 border border-indigo-400 rounded",
    submit: "w-full bg-indigo-500 text-white p-2 rounded",
    submitHover: "hover:bg-indigo-600",
    selectedBtn: "bg-indigo-500 text-white",
    previewBtn: "bg-indigo-500 text-white hover:bg-indigo-600",
  },
  theme10: {
    heading: "text-2xl font-bold text-center text-orange-600",
    input:
      "w-full p-2 border border-orange-400 rounded focus:ring-2 focus:ring-orange-500",
    textarea:
      "w-full p-2 border border-orange-400 rounded focus:ring-2 focus:ring-orange-500",
    file: "w-full p-2 border border-orange-400 rounded",
    submit: "w-full bg-orange-500 text-white p-2 rounded",
    submitHover: "hover:bg-orange-600",
    selectedBtn: "bg-orange-500 text-white",
    previewBtn: "bg-orange-500 text-white hover:bg-orange-600",
  },
};

export default function ResumeBuilder() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
    languages: "",
    image: null,
  });

  const [theme, setTheme] = useState<string>("theme1");
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const cvRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as any;
    if (name === "image" && files?.[0]) {
      const imgURL = URL.createObjectURL(files[0]);
      setFormData({ ...formData, image: imgURL });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const downloadPDF = async () => {
    if (!cvRef.current) return;
    const canvas = await html2canvas(cvRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  // safe access to theme style
  const currentStyle = themeStyles[theme] ?? themeStyles["theme1"];

  const themeKeys = [
    "theme1",
    "theme2",
    "theme3",
    "theme4",
    "theme5",
    "theme6",
    "theme7",
    "theme8",
    "theme9",
    "theme10",
  ];

  return (
    <div
      id="resume"
      className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6"
    >
      {!showPreview ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-gray-900 p-6 sm:p-8 rounded-xl space-y-4 border-2 border-cyan-400 shadow-[0_0_4rem_#0ef]"
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-bold mb-4">
            Resume <span className="text-[#0ef]">Builder</span>
          </h1>

          {/* Inputs */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={currentStyle.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={currentStyle.input}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={currentStyle.input}
          />

          <textarea
            name="summary"
            placeholder="Professional Summary"
            value={formData.summary}
            onChange={handleChange}
            className={currentStyle.textarea}
          />

          <textarea
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
            className={currentStyle.textarea}
          />
          <textarea
            name="experience"
            placeholder="Work Experience"
            value={formData.experience}
            onChange={handleChange}
            className={currentStyle.textarea}
          />
          <textarea
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            className={currentStyle.textarea}
          />
          <textarea
            name="languages"
            placeholder="Languages"
            value={formData.languages}
            onChange={handleChange}
            className={currentStyle.textarea}
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className={currentStyle.file}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 inline-block px-6 py-2 text-lg font-medium bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition"
            >
              View CV
            </button>
          </div>
        </form>
      ) : (
        <div className="w-full max-w-4xl bg-white p-4 sm:p-6 rounded-xl shadow-lg overflow-x-auto">
          <h1 className="text-center text-xl sm:text-2xl font-bold mb-4">
            Your Resume
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            <button
              onClick={() => setShowPreview(false)}
              className="bg-gray-500 text-white px-3 sm:px-4 py-2 rounded"
            >
              Back
            </button>
            <button onClick={downloadPDF} className={currentStyle.previewBtn}>
              Download CV
            </button>
          </div>

          {/* Theme Selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {themeKeys.map((tk, i) => {
              const isActive = theme === tk;
              const btnClass = isActive
                ? `${themeStyles[tk].selectedBtn} px-3 py-1 rounded`
                : "px-3 py-1 rounded bg-gray-200";
              return (
                <button
                  key={tk}
                  onClick={() => setTheme(tk)}
                  className={`${btnClass} text-sm sm:text-base`}
                >
                  Theme {i + 1}
                </button>
              );
            })}
          </div>

          {/* Resume Preview */}
          <div
            ref={cvRef}
            className="p-4 sm:p-6 border rounded-lg overflow-x-auto"
          >
            {/* Templates (same as original, just responsive grid fix) */}
            {theme === "theme1" && (
              <div className="bg-gray-50 p-4 sm:p-6 rounded">
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="profile"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4"
                  />
                )}
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {formData.name}
                </h2>
                <p>
                  {formData.email} | {formData.phone}
                </p>
                <Section title="Summary" text={formData.summary} />
                <Section title="Education" text={formData.education} />
                <Section title="Work Experience" text={formData.experience} />
                <Section title="Skills" text={formData.skills} />
                <Section title="Languages" text={formData.languages} />
              </div>
            )}

           {/* Template 2 */}
{theme === "theme2" && (
  <div className="bg-blue-50 p-6 rounded border-l-8 border-blue-500 w-full max-w-full">
    {formData.image && (
      <img
        src={formData.image}
        alt="profile"
        className="w-24 h-24 rounded-full mb-4 mx-auto md:mx-0"
      />
    )}
    <h2 className="text-2xl font-bold text-blue-700 break-words text-center md:text-left">
      {formData.name}
    </h2>
    <p className="text-center md:text-left break-words">
      {formData.email} | {formData.phone}
    </p>
    <Section title="Summary" text={formData.summary} />
    <Section title="🎓 Education" text={formData.education} />
    <Section title="💼 Work Experience" text={formData.experience} />
    <Section title="🛠 Skills" text={formData.skills} />
    <Section title="🌐 Languages" text={formData.languages} />
  </div>
)}

{/* Template 3 */}
{theme === "theme3" && (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
    <div className="col-span-1 bg-gray-200 p-4 text-center rounded">
      {formData.image && (
        <img
          src={formData.image}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
      )}
      <h2 className="text-xl font-bold break-words">{formData.name}</h2>
      <p className="break-words">{formData.email}</p>
      <p className="break-words">{formData.phone}</p>
    </div>
    <div className="col-span-2 p-4">
      <Section title="Summary" text={formData.summary} />
      <Section title="Education" text={formData.education} />
      <Section title="Work Experience" text={formData.experience} />
      <Section title="Skills" text={formData.skills} />
      <Section title="Languages" text={formData.languages} />
    </div>
  </div>
)}

{/* Template 4 */}
{theme === "theme4" && (
  <div className="border-t-8 border-purple-500 p-6 w-full">
    <h2 className="text-3xl font-bold text-purple-700 text-center md:text-left break-words">
      {formData.name}
    </h2>
    <p className="text-center md:text-left break-words">
      {formData.email} | {formData.phone}
    </p>
    {formData.image && (
      <img
        src={formData.image}
        alt="profile"
        className="w-20 h-20 rounded-full mt-2 mx-auto md:mx-0"
      />
    )}
    <Section title="Summary" text={formData.summary} />
    <Section title="Education" text={formData.education} />
    <Section title="Work Experience" text={formData.experience} />
    <Section title="Skills" text={formData.skills} />
    <Section title="Languages" text={formData.languages} />
  </div>
)}

{/* Template 5 */}
{theme === "theme5" && (
  <div className="bg-green-50 p-6 rounded-lg shadow-inner w-full">
    {formData.image && (
      <img
        src={formData.image}
        alt="profile"
        className="w-24 h-24 rounded mb-3 mx-auto md:mx-0"
      />
    )}
    <h2 className="text-2xl font-bold text-green-700 text-center md:text-left break-words">
      {formData.name}
    </h2>
    <p className="text-center md:text-left break-words">
      {formData.email} | {formData.phone}
    </p>
    <Section title="Summary" text={formData.summary} />
    <Section title="🎓 Education" text={formData.education} />
    <Section title="💼 Work Experience" text={formData.experience} />
    <Section title="🛠 Skills" text={formData.skills} />
    <Section title="🌐 Languages" text={formData.languages} />
  </div>
)}

{/* Template 6 */}
{theme === "theme6" && (
  <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 w-full">
    <h2 className="text-2xl font-bold text-center md:text-left break-words">
      {formData.name}
    </h2>
    {formData.image && (
      <img
        src={formData.image}
        alt="profile"
        className="w-24 h-24 rounded-full my-2 mx-auto md:mx-0"
      />
    )}
    <p className="text-center md:text-left break-words">
      {formData.email} | {formData.phone}
    </p>
    <Section title="Summary" text={formData.summary} />
    <Section title="Education" text={formData.education} />
    <Section title="Work Experience" text={formData.experience} />
    <Section title="Skills" text={formData.skills} />
    <Section title="Languages" text={formData.languages} />
  </div>
)}

{/* Template 7 */}
{theme === "theme7" && (
  <div className="bg-gray-900 text-white p-6 rounded w-full">
    {formData.image && (
      <img
        src={formData.image}
        alt="profile"
        className="w-24 h-24 rounded-full mb-4 mx-auto md:mx-0"
      />
    )}
    <h2 className="text-3xl font-bold text-center md:text-left break-words">
      {formData.name}
    </h2>
    <p className="text-center md:text-left break-words">
      {formData.email} | {formData.phone}
    </p>
    <Section title="Summary" text={formData.summary} />
    <Section title="Education" text={formData.education} />
    <Section title="Work Experience" text={formData.experience} />
    <Section title="Skills" text={formData.skills} />
    <Section title="Languages" text={formData.languages} />
  </div>
)}

{/* Template 8 */}
{theme === "theme8" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-pink-50 p-6 w-full">
    <div className="text-center md:text-left">
      {formData.image && (
        <img
          src={formData.image}
          alt="profile"
          className="w-24 h-24 rounded mb-3 mx-auto md:mx-0"
        />
      )}
      <h2 className="text-xl font-bold text-pink-700 break-words">
        {formData.name}
      </h2>
      <p className="break-words">{formData.email}</p>
      <p className="break-words">{formData.phone}</p>
    </div>
    <div>
      <Section title="Summary" text={formData.summary} />
      <Section title="Education" text={formData.education} />
      <Section title="Work Experience" text={formData.experience} />
      <Section title="Skills" text={formData.skills} />
      <Section title="Languages" text={formData.languages} />
    </div>
  </div>
)}

{/* Template 9 */}
{theme === "theme9" && (
  <div className="border border-dashed border-blue-400 p-6 rounded w-full">
    {formData.image && (
      <img
        src={formData.image}
        alt="profile"
        className="w-20 h-20 rounded-full mb-3 mx-auto md:mx-0"
      />
    )}
    <h2 className="text-xl font-bold text-center md:text-left break-words">
      {formData.name}
    </h2>
    <p className="text-center md:text-left break-words">
      {formData.email} | {formData.phone}
    </p>
    <Section title="Summary" text={formData.summary} />
    <Section title="Education" text={formData.education} />
    <Section title="Work Experience" text={formData.experience} />
    <Section title="Skills" text={formData.skills} />
    <Section title="Languages" text={formData.languages} />
  </div>
)}

{/* Template 10 */}
{theme === "theme10" && (
  <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-6 rounded w-full">
    {formData.image && (
      <img
        src={formData.image}
        alt="profile"
        className="w-24 h-24 rounded-full mb-3 mx-auto md:mx-0"
      />
    )}
    <h2 className="text-2xl font-bold text-indigo-700 text-center md:text-left break-words">
      {formData.name}
    </h2>
    <p className="text-center md:text-left break-words">
      {formData.email} | {formData.phone}
    </p>
    <Section title="Summary" text={formData.summary} />
    <Section title="🎓 Education" text={formData.education} />
    <Section title="💼 Work Experience" text={formData.experience} />
    <Section title="🛠 Skills" text={formData.skills} />
    <Section title="🌐 Languages" text={formData.languages} />
  </div>
)}

          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-3">
      <h3 className="font-semibold">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
