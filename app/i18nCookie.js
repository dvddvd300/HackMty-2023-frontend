import { createCookie } from "@remix-run/cloudflare";

export let i18nCookie = createCookie("i18n", {
  sameSite: "lax",
  path: "/",
  domain: "360exp.net",
});