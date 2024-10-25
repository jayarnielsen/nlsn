import "@gaze-ui/react/styles.css";
import "@gaze-ui/tokens/css/variables.css";
import { Metadata } from "next";
import { Nunito_Sans, VT323 } from "next/font/google";
import Head from "next/head";
import * as React from "react";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: "200",
});

export const metadata: Metadata = {
  title: "Jay Nielsen's Blog",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={
          {
            "--gaze-color-text-default": "var(--gaze-color-slate-800)",
            "--gaze-font-family-base": vt323.style.fontFamily,
            "--gaze-font-family-heading": nunito.style.fontFamily,
            "--gaze-text-weight": vt323.style.fontWeight?.toString(),
            "--gaze-heading-weight": nunito.style.fontWeight?.toString(),
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
