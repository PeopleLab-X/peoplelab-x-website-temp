// Use global fetch
async function runTests() {
  console.log("==================================================");
  console.log("      PEOPLELAB X - LIGHTWEIGHT INTEGRATION TEST");
  console.log("==================================================");

  const contactPayload = {
    name: "Cyril Alstrup Test Contact",
    email: "cyril.alstrup+test@peoplelabx.com",
    company: "PLX Integration Test Ltd",
    role: "Technical Auditor",
    phone: "+45 12 34 56 78",
    situation: "Strukturering af vækst og processer",
    decisionText: "Dette er en integrationstest af kontaktformularen.",
    timeframe: "Indenfor 1-3 måneder",
    consent: true,
    language: "DA",
    url: "https://peoplelabx.com/da/ydelser"
  };

  const indicatorPayload = {
    name: "Cyril Alstrup Test Indicator",
    email: "cyril.alstrup+test@peoplelabx.com",
    company: "PLX Integration Test Ltd",
    role: "Technical Auditor",
    q1Value: "structuring-growth",
    q2Value: "4",
    q3Value: ["Mangler struktur i salget", "Asynkront købsmønster"],
    q4Value: "Fokus på digital synlighed",
    q5Value: "3",
    q6Value: ["Flere beslutningstagere", "Svært at differentiere"],
    q7Value: ["Ja, vi har brug for en ekstern diagnose"],
    decisionText: "Dette er en integrationstest af Reality Check Indikatoren.",
    consent: true,
    language: "DA",
    url: "https://peoplelabx.com/da/reality-check"
  };

  // 1. Submit contact form
  console.log("\n1. Testing /api/submit-form...");
  try {
    const res = await fetch("http://localhost:3000/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactPayload)
    });
    const data = await res.json();
    console.log("Status:", res.status);
    console.log("Response:", JSON.stringify(data, null, 2));
  } catch (err: any) {
    console.error("Failed submitting contact form:", err.message);
  }

  // 2. Submit indicator
  console.log("\n2. Testing /api/submit-indicator...");
  try {
    const res = await fetch("http://localhost:3000/api/submit-indicator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(indicatorPayload)
    });
    const data = await res.json();
    console.log("Status:", res.status);
    console.log("Response:", JSON.stringify(data, null, 2));
  } catch (err: any) {
    console.error("Failed submitting indicator:", err.message);
  }
}

runTests();
