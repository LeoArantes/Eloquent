import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";

i18next
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ["en", "pt"],
		fallbackLng: "pt",
		debug: false,
		// Options for language detector
		detection: {
			order: ["path", "cookie", "htmlTag"],
			caches: ["cookie"]
		},
		react: { useSuspense: false },
		backend: {
			loadPath: "./assets/locales/{{lng}}/translation.json",
		},
	}); 

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);
