import { useState } from "react";

export const useFlowData = <T>(initialData?: Partial<T>) => {
  const [data, setData] = useState<T | null>(initialData as T);

  const handleDataChange = (newData: Partial<T>) => {
    setData((prev) => {
      console.log({ prev, newData });
      return Object.assign(prev || {}, newData as T);
    });
  };

  return { data, handleDataChange };
};
