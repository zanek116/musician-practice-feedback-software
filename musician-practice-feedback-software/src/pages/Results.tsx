import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Results.css";

type FeedbackItem = {
  type: "correct" | "incorrect";
  message: string;
};

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const feedback: FeedbackItem[] = location.state?.feedback || [];
  const [savedReports, setSavedReports] = useState<{ [key: string]: FeedbackItem[] }>(
    () => JSON.parse(localStorage.getItem("savedReports") || "{}")
  ); // Load saved reports from local storage
  const [reportName, setReportName] = useState(""); // State for the report name
  const [selectedReport, setSelectedReport] = useState<FeedbackItem[] | null>(null); // State for the selected report

const handleSaveReport = () => {
  if (!reportName.trim()) {
    alert("Please enter a report name.");
    return;
  }

  // Clean the messages before saving
  const cleanedFeedback = feedback.map((item) => ({
    ...item,
    message: item.message.replace(/ at \d+(\.\d+)? ms/, "").trim(),
  }));

  const updatedReports = { ...savedReports, [reportName]: cleanedFeedback };
  setSavedReports(updatedReports);
  localStorage.setItem("savedReports", JSON.stringify(updatedReports)); // Save to local storage
  setReportName(""); // Clear the input field
  alert(`Report "${reportName}" saved successfully!`);
};

const handleDeleteReport = (name: string) => {
  const updatedReports = { ...savedReports };
  delete updatedReports[name]; // Remove the selected report
  setSavedReports(updatedReports); // Update the state
  localStorage.setItem("savedReports", JSON.stringify(updatedReports)); // Update local storage
  alert(`Report "${name}" deleted successfully!`);
};

  const handleViewReport = (name: string) => {
    setSelectedReport(savedReports[name]);
  };

  return (
       <div className="results-container">
      <h1 className="title">Feedback Results</h1>
    
      {/* Reports Row */}
      <div className="reports-row">
        {/* Current Report Section */}
        <div className="report-section">
          <h2>Current Report</h2>
          <table className="report-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {feedback.map((item, index) => {
                // Remove "at ... ms" from the message
                const cleanedMessage = item.message.replace(/ at \d+(\.\d+)? ms/, "").trim();
                
                return (
                  <tr key={index} className={item.type}>
                    <td>{index + 1}</td>
                    <td>{item.type === "correct" ? "Correct" : "Incorrect"}</td>
                    <td>{cleanedMessage}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    
        {/* Selected Report Section */}
        <div className="selected-report-section">
          <h2>Selected Report</h2>
          <table className="report-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {selectedReport ? (
                selectedReport.map((item, index) => (
                  <tr key={index} className={item.type}>
                    <td>{index + 1}</td>
                    <td>{item.type === "correct" ? "Correct" : "Incorrect"}</td>
                    <td>{item.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ textAlign: "center" }}>
                    No report selected.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    
      {/* Actions Row */}
      <div className="actions-row">
        {/* Save Report Section */}
        <div className="save-report-section">
          <input
            type="text"
            value={reportName}
            onChange={(e) => setReportName(e.target.value)}
            placeholder="Enter report name"
            className="report-name-input"
          />
          <button onClick={handleSaveReport} className="save-report-button">
            Save Report
          </button>
        </div>
    
        {/* Saved Reports Section */}
        <div className="saved-reports-section">
          <h2>Saved Reports</h2>
          {Object.keys(savedReports).length === 0 ? (
            <p>No saved reports.</p>
          ) : (
            <div className="saved-reports-list">
              {Object.keys(savedReports).map((name) => (
                <div key={name} className="saved-report-item">
                  <button
                    onClick={() => handleViewReport(name)}
                    className="saved-report-button"
                  >
                    {name}
                  </button>
                  <span
                    onClick={() => handleDeleteReport(name)}
                    className="delete-report-icon"
                    title="Delete"
                  >
                    &times;
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    
      <button onClick={() => navigate("/songs")} className="back-button">
        Back to Songs
      </button>
    </div>
  );
};

export default Results;