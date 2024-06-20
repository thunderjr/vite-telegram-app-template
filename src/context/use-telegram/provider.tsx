"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import {
  initMiniApp,
  initInitData,
  type User,
  type MiniApp,
} from "@tma.js/sdk";

type TelegramContextType = {
  user?: User;
  isLoading: boolean;
  webApp?: MiniApp;
};

export const TelegramContext = createContext<TelegramContextType>({
  isLoading: true,
});

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setLoading] = useState(true);

  const initData = initInitData();
  const [webApp] = initMiniApp();

  useEffect(() => {
    if (webApp) {
      webApp.ready();
      setLoading(false);
    }
  }, [webApp]);

  const value = useMemo(() => {
    return webApp && initData
      ? {
          webApp,
          user: initData?.user,
          unsafeData: initData,
        }
      : {};
  }, [webApp, initData]);

  return (
    <TelegramContext.Provider value={{ isLoading, ...value }}>
      {children}
    </TelegramContext.Provider>
  );
};
