import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
  NWS_API_BASE: "https://api.weather.gov",
  USER_AGENT: "weather-app/1.0",
} as const;
