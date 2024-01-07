import { Outlet } from "@remix-run/react";

export default function Route() {
  return (
    <div>
      <h2>Mail route</h2>
      <Outlet />
    </div>
  );
}
