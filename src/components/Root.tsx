import { SDKProvider, useLaunchParams } from "@tma.js/sdk-react";
import { type FC, useEffect } from "react";

import { OutsideTelegramWrapper } from "./layout/outside-telegram";
import { TelegramProvider } from "@/context/use-telegram/provider";
import { ErrorBoundary } from "@/components/ErrorBoundary.tsx";
import { ThemeProvider } from "./ThemeProvider";
import { App } from "@/components/App.tsx";

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === "string"
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

const Inner: FC = () => {
  const debug = useLaunchParams().startParam === "debug";

  useEffect(() => {
    if (debug) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <SDKProvider acceptCustomStyles debug={debug}>
      <ThemeProvider>
        <TelegramProvider>
          <OutsideTelegramWrapper>
            <main className="px-8 pb-16 pt-8 md:w-3/4 lg:w-3/6 md:mx-auto">
              <App />
            </main>
          </OutsideTelegramWrapper>
        </TelegramProvider>
      </ThemeProvider>
    </SDKProvider>
  );
};

export const Root: FC = () => (
  <ErrorBoundary fallback={ErrorBoundaryError}>
    <Inner />
  </ErrorBoundary>
);
