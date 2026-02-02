import type { RouteObject } from "react-router-dom";

class RouteInjection {
  private routes: RouteObject[] = [];

  addRoutes(routes: RouteObject[]) {
    this.routes.push(...routes);
  }

  addLayout(layout: RouteObject) {
    this.routes.push(layout);
  }

  getRoutes(): RouteObject[] {
    return this.routes;
  }
}

export const routeInjection = new RouteInjection();
export default routeInjection;
