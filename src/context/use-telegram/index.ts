import { useContext } from "react";

import { TelegramContext } from "./provider";

export const useTelegram = () => useContext(TelegramContext);
