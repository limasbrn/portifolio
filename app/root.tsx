import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/style.css";

export const links: LinksFunction = () => {
  return [{ rel:'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Saiti",
  description:"Pagininha sabrininha glu glu yah yah!",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="test">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
