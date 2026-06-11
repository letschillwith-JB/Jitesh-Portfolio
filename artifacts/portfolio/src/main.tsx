import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// 1. ADD THIS IMPORT LINE HERE
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    
    {/* 2. ADD THIS COMPONENT RIGHT HERE */}
    <Analytics />
  </>
);