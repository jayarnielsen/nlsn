import gazeConfig from "@gaze-ui/eslint-config";

export default [
  ...gazeConfig,
  { ignores: ["**/.next/**", "**/out/**", "next-env.d.ts", "next.config.js"] },
  {
    n: {
      tryExtensions: [".js", ".ts"],
    },
  },
];
