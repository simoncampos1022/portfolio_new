import nextConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: ["simon-degala-campos---senior-software-engineer-portfolio/**"],
  },
  ...nextConfig,
];

export default eslintConfig;
