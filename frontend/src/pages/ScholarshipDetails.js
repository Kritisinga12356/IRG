import React from "react";
import { useParams } from "react-router-dom";
import "./ScholarshipDetails.css";
import data from "./scholarData.json";

export default function ScholarshipDetails() {
  const { id } = useParams();

  // convert id to number and find item
  const scholarship = data.find(
    (item) => Number(item.id) === Number(id)
  );

  if (!scholarship) {
    return (
      <div className="details-container">
        <h2>Scholarship Not Found</h2>
      </div>
    );
  }

  return (
    <div className="details-container">
      {/* Banner Image */}
      <img
        src={scholarship.img}
        alt={scholarship.name}
        className="details-img"
      />

      {/* Title */}
      <h1 className="details-title">{scholarship.name}</h1>

      {/* Short Description */}
      <p className="details-desc">{scholarship.desc}</p>

      {/* Eligibility Section */}
      <h3>Eligibility</h3>
      <p>{scholarship.details?.eligibility}</p>

      {/* Documents Section */}
      <h3>Required Documents</h3>
      <ul>
        {scholarship.details?.documents?.map((doc, index) => (
          <li key={index}>{doc}</li>
        ))}
      </ul>

      {/* Amount */}
      <h3>Scholarship Amount</h3>
      <p>{scholarship.details?.amount}</p>

      {/* Application Process */}
      <h3>How to Apply</h3>
      <p>{scholarship.details?.process}</p>

      {/* Official Website Button */}
      <a
        href={scholarship.link}
        target="_blank"
        rel="noopener noreferrer"
        className="apply-btn"
      >
        Go to Official Website →
      </a>
    </div>
  );
}
