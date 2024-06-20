import ReactDOM from "react-dom/client";
import "@fontsource/inter";
import "./index.css";

import "./mockEnv.ts";

import { Root } from "@/components/Root";

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
