import {
  Anchor,
  Box,
  Center,
  Cluster,
  Separator,
  Stack,
  Text,
} from "@gaze-ui/react";
import "@gaze-ui/react/styles.css";
import "@gaze-ui/tokens/css/variables.css";
import { Nunito_Sans, VT323 } from "next/font/google";
import * as React from "react";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: "200",
});

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
        <Box paddingY="var(--gaze-space-50)">
          <Center gutter="var(--gaze-space-50)" maxWidth="100rem">
            <Stack space="var(--gaze-space-50)">
              {children}
              <Stack space="var(--gaze-space-30)">
                <Separator
                  color="var(--gaze-color-slate-800)"
                  variant="dotted"
                />
                <Cluster justify="space-between">
                  <Text>
                    Built with{" "}
                    <Anchor
                      href="https://github.com/studio-drishti/gaze"
                      rel="nofollow"
                      target="_blank"
                    >
                      Gaze design system
                    </Anchor>
                    .
                  </Text>
                  <Text>&copy; {new Date().getFullYear()}</Text>
                </Cluster>
              </Stack>
            </Stack>
          </Center>
        </Box>
      </body>
    </html>
  );
}
