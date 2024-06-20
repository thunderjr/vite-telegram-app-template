import { useTelegram } from "@/context/use-telegram";
import { Loading } from "@/components/Loading";

export function HomePage() {
  const { user, isLoading } = useTelegram();

  if (isLoading) return <Loading showLogo />;

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
