import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useCookie } from "nuxt/app";

interface RouteMeta {
  requiresAuth?: boolean;
  requiresRole?: string[];
}

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) {
    return;
  }
  const token =
    localStorage.getItem("elearn-token") || useCookie("elearn-token").value;

  // const token =
  //   typeof window !== "undefined" ? localStorage.getItem("elearn-token") : null;

  let userRole: string | null = null;

  if (token) {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      console.log("Decoded Token from auth:", decodedToken);

      if (decodedToken && decodedToken.role) {
        userRole = decodedToken.role;
        console.log("User Role Extracted from auth:", userRole);
      } else {
        console.warn("Role field is missing in the decoded token");
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      return navigateTo("/login");
    }
  }

  const meta = to.meta as RouteMeta;
  console.log("Route Meta:", meta);
  console.log("from meta - role :", meta.requiresRole);

  if (meta.requiresAuth) {
    if (!token) {
      return navigateTo("/login");
    }
    if (
      meta.requiresRole &&
      userRole &&
      !meta.requiresRole.includes(userRole)
    ) {
      return navigateTo("/permission_denied");
    }
  }
});
