import { type PropsWithChildren } from "react";
import { FaTelegram } from "react-icons/fa6";

import { useTelegram } from "@/context/use-telegram";
import { Button } from "../ui/button";
import { Loading } from "../Loading";

const WEBAPP_LINK = import.meta.env.VITE_WEBAPP_LINK;

export const OutsideTelegramWrapper = ({ children }: PropsWithChildren<{}>) => {
  const { isLoading, user } = useTelegram();

  if (isLoading) return <Loading showLogo />;

  if (!user) return <Warning />;

  return <>{children}</>;
};

const Warning = () => {
  const navigate = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center mt-24 bg-black/5 dark:bg-white/5 rounded-lg p-12 xl:w-3/4 max-w-[600px] mx-auto">
      <h1 className="text-4xl mb-4">Ops...</h1>
      <h3 className="text-xl text-center mb-8 xl:w-1/2">
        This page is only available in your Telegram app.
      </h3>
      <Button onClick={() => navigate(WEBAPP_LINK)} className="flex gap-2">
        <FaTelegram size={24} />
        Open Telegram
      </Button>
    </div>
  );
};
