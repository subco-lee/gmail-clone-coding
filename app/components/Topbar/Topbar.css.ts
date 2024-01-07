import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: 64,
  alignItems: "center",
  padding: 8,
});

export const iconBox = style({
  padding: 12,
  margin: 4,
});

export const logoBox = style({
  width: 109,
  height: 40,
});

export const searchBar = style({
  borderRadius: 32,
  padding: "0px 16px",
  backgroundColor: "#e9f2fb",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});
