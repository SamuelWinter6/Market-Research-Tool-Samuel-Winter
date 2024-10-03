import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [ticker, setTicker] = useState("");
  const [companyData, setCompanyData] = useState(null);
  const [error, setError] = useState("");

  const fetchCompanyData = async () => {
    try {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=eRqAs5GdaLid5BCgqWWORkWMXIq62v87`
      );
      const data = await response.json();

      if (data.length === 0) {
        setError("No data found for this ticker.");
        setCompanyData(null);
      } else {
        setCompanyData(data[0]);
        setError("");
      }
    } catch (err) {
      setError("Error fetching data. Please try again.");
      setCompanyData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticker.trim()) {
      fetchCompanyData();
    } else {
      setError("Please enter a valid ticker symbol.");
    }
  };

  const renderFinancialDetails = (data) => {
    const financialFields = [
      "price",
      "mktCap",
      "volAvg",
      "beta",
      "lastDiv",
      "range",
      "changes",
      "dcf",
      "dcfDiff",
    ];
    return financialFields.map((field) => (
      <p key={field}>
        <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>{" "}
        {typeof data[field] === "number"
          ? data[field].toLocaleString()
          : data[field]}
      </p>
    ));
  };

  const renderCompanyInfo = (data) => {
    const companyFields = [
      "ceo",
      "sector",
      "industry",
      "fullTimeEmployees",
      "phone",
      "address",
      "city",
      "state",
      "zip",
      "ipoDate",
      "website",
    ];
    return companyFields.map((field) => (
      <p key={field}>
        <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>{" "}
        {data[field]}
      </p>
    ));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Market Research Tool</h1>
      </header>

      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="ticker"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            placeholder="e.g., AAPL, TSLA"
          />
          <button type="submit">Search</button>
        </form>

        {error && <p className="error">{error}</p>}
      </div>

      {companyData && (
        <div className="company-header">
          <img
            src={companyData.image}
            alt={`${companyData.companyName} Logo`}
            className="company-logo"
          />
          <div className="company-header-text">
            <h2>{companyData.companyName}</h2>
          </div>
        </div>
      )}

      {companyData && (
        <div className="company-details-wrapper">
          <div className="company-details-financial">
            <h3>Financial Indicators</h3>
            {renderFinancialDetails(companyData)}
          </div>

          <div className="company-details-info">
            <h3>Company Information</h3>
            <p>
              <strong>Description:</strong> {companyData.description}
            </p>
            {renderCompanyInfo(companyData)}
          </div>
        </div>
      )}
    </div>
  );
}
