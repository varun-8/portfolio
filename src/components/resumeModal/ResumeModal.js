import React, { useEffect } from "react";
import { greeting } from "../../portfolio";
import "./ResumeModal.css";

/**
 * Interactive PDF preview modal for Varun's resume with fallback open/download actions.
 */
export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="resume-modal">
        <div className="resume-modal-head">
          <div className="resume-modal-title-wrap">
            <span className="resume-modal-icon" aria-hidden="true">
              <i className="fas fa-file-pdf"></i>
            </span>
            <div>
              <h2 id="resume-modal-title" className="resume-modal-title">
                {greeting.full_name} — Resume
              </h2>
              <p className="resume-modal-sub">{greeting.subTitle}</p>
            </div>
          </div>

          <div className="resume-modal-actions">
            <a
              className="resume-action-btn"
              href={greeting.resumeLink}
              download="Varun_S_SOC_Analyst_Resume.pdf"
            >
              <i className="fas fa-download" aria-hidden="true"></i>
              Download
            </a>
            <a
              className="resume-action-btn primary"
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              Open Tab
            </a>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className="resume-modal-body">
          <iframe
            title={`${greeting.full_name} Resume PDF`}
            src={`${greeting.resumeLink}#view=FitH`}
            className="resume-iframe"
          />
          <p className="resume-fallback-note">
            PDF preview unavailable in your browser?{" "}
            <a
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the resume in a new tab
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
