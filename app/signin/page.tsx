"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  user: string;
  password: string;
  host: string;
  port: number;
}

export default function Page() {
  // State to track form inputs
  const [formData, setFormData] = useState<FormData>({
    user: "",
    password: "",
    host: "",
    port: 993,
  });

  // State to store fetched emails count
  const [emailCount, setEmailCount] = useState<number | null>(null);

  // State to store any error message
  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "port" ? Number(value) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      // POST to /api/loadEmails
      const response = await fetch("/api/loadEmails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch emails: ${response.statusText}`);
      }

      const data = await response.json();
      // Update email count instead of displaying emails
      setEmailCount(data.emails?.length ?? 0);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#333", // Dark gray background
        color: "#fff",           // White text for readability
        minHeight: "100vh",      // Full viewport height
        display: "flex",         // Center content
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
      }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Fetch Emails</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#444",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <label style={{ marginBottom: "1rem" }}>
          User:
          <input
            type="text"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.3rem",
              borderRadius: "4px",
              border: "none",
              color: "#000", // Text color black
              backgroundColor: "#fff", // White background
            }}
          />
        </label>

        <label style={{ marginBottom: "1rem" }}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.3rem",
              borderRadius: "4px",
              border: "none",
              color: "#000", // Text color black
              backgroundColor: "#fff", // White background
            }}
          />
        </label>

        <label style={{ marginBottom: "1rem" }}>
          Host:
          <input
            type="text"
            name="host"
            value={formData.host}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.3rem",
              borderRadius: "4px",
              border: "none",
              color: "#000", // Text color black
              backgroundColor: "#fff", // White background
            }}
          />
        </label>

        <label style={{ marginBottom: "1rem" }}>
          Port:
          <input
            type="number"
            name="port"
            value={formData.port}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.3rem",
              borderRadius: "4px",
              border: "none",
              color: "#000", // Text color black
              backgroundColor: "#fff", // White background
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.7rem",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Load Emails
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {emailCount !== null && (
        <h2 style={{ marginTop: "2rem" }}>Number of emails retrieved: {emailCount}</h2>
      )}
    </div>
  );
}
