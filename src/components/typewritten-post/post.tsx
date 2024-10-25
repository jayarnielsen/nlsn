import {
  Anchor,
  Box,
  Center,
  Heading,
  Separator,
  Stack,
  Switcher,
  Text,
} from "@gaze-ui/react";
import Giscus from "@giscus/react";
import Image from "next-export-optimize-images/image";
import * as React from "react";

import { TypewrittenPostType } from "../../types";
import styles from "./post.module.css";

export interface PostProps {
  post: TypewrittenPostType;
}

export const TypewrittenPost = ({ post }: PostProps) => {
  return (
    <Center gutter="var(--gaze-space-50)" maxWidth="100rem">
      <Stack space="var(--gaze-space-30)">
        {post.title && <Heading as="h1">{post.title}</Heading>}
        {post.description && (
          <Text fontSize="var(--gaze-font-size-2xl)">{post.description}</Text>
        )}
        <Switcher limit={2} space="var(--gaze-space-50)" threshold="90rem">
          <Stack className={styles.man} space="var(--gaze-space-50)">
            <Text>
              The following content was typewritten by a human on a {post.model}{" "}
              typewriter.
              <span className={styles["skip-link"]}>
                {" "}
                <Anchor href="#machine-translation">
                  Skip to the machine translation.
                </Anchor>
              </span>
            </Text>
            {post.contents?.map((content, i) => (
              <Image
                alt={`${post.title ?? ""} page ${(i + 1).toString()}`}
                aria-describedby={`page-${i.toString()}`}
                key={content.imgSrc}
                placeholder="blur"
                src={require(`../../scans/${post.slug}/${content.imgSrc}`)}
              />
            ))}
          </Stack>
          <Stack id="machine-translation" space="var(--gaze-space-50)">
            <Text>
              The following content was machine translated from the typewritten
              text.
            </Text>
            <Box
              background="var(--gaze-color-slate-900)"
              borderRadius="var(--gaze-radius-md)"
              data-invert={true}
              padding="var(--gaze-space-100)"
            >
              {post.contents && (
                <Stack space="var(--gaze-space-100)">
                  {post.contents.map((content, i) => (
                    <React.Fragment key={content.imgSrc}>
                      <Stack
                        className={styles.machine}
                        id={`page-${i}`}
                        space="var(--gaze-space-20)"
                      >
                        {content.text.split("\n\n").map((paragraph) => (
                          <Text
                            fontSize="var(--gaze-font-size-xl)"
                            key={paragraph}
                          >
                            {paragraph}
                          </Text>
                        ))}
                      </Stack>
                      {i < (post.contents?.length ?? 0) - 1 && (
                        <Separator
                          color="var(--gaze-color-white)"
                          thickness="var(--gaze-border-width-2)"
                          variant="dotted"
                        />
                      )}
                    </React.Fragment>
                  ))}
                </Stack>
              )}
            </Box>
          </Stack>
        </Switcher>
        <Box>
          <Giscus
            category="General"
            categoryId="DIC_kwDOHr3Avc4CXiSz"
            emitMetadata="0"
            id="comments"
            inputPosition="top"
            lang="en"
            loading="lazy"
            mapping="specific"
            reactionsEnabled="1"
            repo="jnlsn/nlsn"
            repoId="R_kgDOHr3AvQ"
            term={post.title}
            theme="light"
          />
        </Box>
      </Stack>
    </Center>
  );
};
