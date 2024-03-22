
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./control-panel-style.css";
import { PiMinus, PiPlus } from "react-icons/pi";
import { FiGithub, FiDownload } from "react-icons/fi"; // Import FiDownload for the download icon
import {
  HiOutlineArrowUturnLeft,
  HiOutlineArrowUturnRight,
} from "react-icons/hi2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type ControlPanelProps = {
  undo: () => void;
  redo: () => void;
  onZoom: (scale: number) => void;
  scale: number;
  setScale: (scale: number) => void;
};

export function ControlPanel({
  undo,
  redo,
  onZoom,
  scale,
  setScale,
}: ControlPanelProps) {
  const handleDownload = () => {
    const canvas = document.getElementById("canvas");

    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }

    // Get the canvas element
    html2canvas(canvas as HTMLElement).then((canvas) => {
      // Create a new PDF document
      const pdf = new jsPDF("p", "mm", "a4");

      // Add the captured canvas image to the PDF
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height
      );

      // Save the PDF
      pdf.save("canvas_content.pdf");
    });
  };

  return (
    <>
      <div className="controlPanel">
        <div className="zoomPanel">
          <Tippy content="Zoom Out">
            <button onClick={() => onZoom(-0.1)} aria-label="Zoom Out">
              <PiMinus />
            </button>
          </Tippy>
          <Tippy content={`Set scale to 100%`}>
            <button
              onClick={() => setScale(1)}
              aria-label={`Set scale to 100%`}
            >
              {new Intl.NumberFormat("en-GB", { style: "percent" }).format(
                scale
              )}
            </button>
          </Tippy>
          <Tippy content="Zoom In">
            <button onClick={() => onZoom(0.1)} aria-label="Zoom In">
              <PiPlus />
            </button>
          </Tippy>
        </div>

        <div className="editPanel">
          <Tippy content="Undo last action">
            <button onClick={undo} aria-label="Undo last action">
              <HiOutlineArrowUturnLeft />
            </button>
          </Tippy>
          <Tippy content="Redo last action">
            <button onClick={redo} aria-label="Redo last action">
              <HiOutlineArrowUturnRight />
            </button>
          </Tippy>
        </div>

        {/* Add the download button */}
        <div className="downloadPanel">
          <Tippy content="Download as PDF">
            <button onClick={handleDownload} aria-label="Download as PDF">
              <FiDownload />
            </button>
          </Tippy>
        </div>
      </div>{" "}
      <a
        className="link font-semibold"
        href="https://github.com/KishanInnovates"
        target="_blank"
      >
        <FiGithub />
        Created by Kishan
      </a>
    </>
  );
}
