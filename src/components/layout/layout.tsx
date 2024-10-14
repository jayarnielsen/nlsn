import { Box } from "@gaze-ui/react";
import * as React from "react";

import { Footer } from "../footer";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box paddingY="var(--gaze-space-50)">
      {children}
      <Footer />
    </Box>
  );
};
