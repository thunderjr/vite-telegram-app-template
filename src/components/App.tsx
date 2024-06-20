import { Navigate, Route, Router, Routes } from "react-router-dom";
import { useIntegration } from "@tma.js/react-router-integration";
import { type FC, useEffect, useMemo } from "react";
import {
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  bindMiniAppCSSVars,
  useThemeParams,
  initNavigator,
  useMiniApp,
  useViewport,
} from "@tma.js/sdk-react";

import { routes } from "@/navigation/routes";

export const App: FC = () => {
  const themeParams = useThemeParams();
  const viewport = useViewport();
  const miniApp = useMiniApp();

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
  const [location, reactNavigator] = useIntegration(navigator as any);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <Router location={location} navigator={reactNavigator}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
