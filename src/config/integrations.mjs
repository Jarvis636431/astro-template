// @ts-check
import { validateIntegrationConfig } from "./validate.mjs";
/** @type {import("./types.ts").IntegrationConfig} */
export const integrationConfig = {
  comments: {
    enabled: false,
    repository: "",
    category: "Announcements",
    theme: "light",
    language: "en",
  },
  viewCounter: { enabled: false },
  contributions: { enabled: false, heatmap: false, sync: false, pageSize: 6 },
};
validateIntegrationConfig(integrationConfig);
