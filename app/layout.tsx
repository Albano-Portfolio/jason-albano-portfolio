import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Jason Albano | Senior Healthcare Data Analyst",
  description:
    "Senior Healthcare Data Analyst with 18+ years of experience in Databricks, Tableau, Power BI, SQL, Python, and AI-enabled analytics. Based in Nashville, TN.",
  keywords: ["Jason Albano", "Healthcare Data Analyst", "Databricks", "Tableau", "Nashville", "Business Intelligence"],
  authors: [{ name: "Jason Albano" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(8,15,31,0.95)",
              border: "1px solid rgba(6,182,212,0.3)",
              color: "#f0f9ff",
            },
          }}
        />
      </body>
    </html>
  );
}
