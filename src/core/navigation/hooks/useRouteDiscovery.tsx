import { useMemo } from "react";
import { routesPath } from "../routes.path";
export const useRouteDiscovery = (input: string) => {
  return useMemo(() => {
    if (!input) return { exists: false, suggestion: null };

    const cleanInput = input.toLowerCase().trim();


    const exact = routesPath.find(r => r.path.toLowerCase() === cleanInput || r.path.toLowerCase() === `/${cleanInput}`);
    if (exact) return { exists: true, suggestion: exact.path, name: exact.name };


    const suggestion = routesPath.find(route => {
      return (
        route.name.toLowerCase().includes(cleanInput) ||
        route.keywords.some(k => k.includes(cleanInput)) ||
        route.path.includes(cleanInput)
      );
    });

    return {
      exists: false,
      suggestion: suggestion ? suggestion.path : null,
      name: suggestion ? suggestion.name : null
    };
  }, [input]);
};