import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import { ContentArea, Sidebar } from "./components";
import "./styles/reset.css";
import { Topbar } from "./components/Topbar";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Topbar />
        <Sidebar />
        <ContentArea>
          <Outlet />
        </ContentArea>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
