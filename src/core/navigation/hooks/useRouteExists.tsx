import { useMemo } from "react";
import { matchRoutes } from "react-router-dom";
import { routesPath } from "../routes.path";

export const useRouteExists = (path: string): boolean => {
  return useMemo(() => {
    if (!path) return false;

    const normalizedPath = path.startsWith("/") ? path : `/${path}`;

    const matches = matchRoutes(routesPath, {
      pathname: normalizedPath,
    });

    return matches !== null;
  }, [path]);
};
