import type { LinksFunction, LoaderArgs, LoaderFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesTailwind from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }, { rel: "stylesheet", href: stylesTailwind },] : [{ rel: "stylesheet", href: stylesTailwind },]),
];

import i18next from "~/i18next.server";
import { json } from "@remix-run/cloudflare";

import { i18nCookie } from "./i18nCookie.js"

import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function useChangeLanguage(locale: string) { 
  let { i18n } = useTranslation(); 
  useEffect(() => { 
    i18n.changeLanguage(locale); 
  }, [locale, i18n]); 
}

export async function loader({ request }: LoaderArgs) {
  let locale = await i18next.getLocale(request);
  return json({ locale });
}

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};


import Header from "./components/header";
import Footer from "./components/footer";


export default function App() {
  let { locale } = useLoaderData<typeof loader>();

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);
  
  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen bg-base text-base-content">
        <div className="flex-none">
        <Header />
        </div>
        <div className="flex-grow flex flex-col">
        <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <div className="flex-none">
        <Footer />
        </div>
      </body>
    </html>
  );
}
