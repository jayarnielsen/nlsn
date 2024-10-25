import { Box, Center } from "@gaze-ui/react";
import * as React from "react";

import { Footer } from "../footer";

export interface SiteLayoutProps {
  children: React.ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <Box paddingY="var(--gaze-space-50)">
      <Center gutter="var(--gaze-space-50)" maxWidth="100rem">
        {children}
        <Footer />
      </Center>
    </Box>
  );
};
