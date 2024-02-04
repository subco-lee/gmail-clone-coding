import { style } from "@vanilla-extract/css";

export const container = style({
  width: 256,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  top: 0,
  position: "fixed",
  left: 0,
  marginTop: 64,
  backgroundColor: "#f6f8fc",
});

export const button = style({
  borderRadius: 16,
  minWidth: 96,
  height: 56,
  backgroundColor: "#c2e7fe",
  border: "none",
  padding: "0 24px 0 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const icon = style({
  padding: 8,
  margin: 4,
});

export const section = style({
  display: "block",
  margin: "8px 0 0 8px",
});

export const menuGroup = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "8px 16px",
});

export const menuIcon = style({
  fontSize: 18,
});

export const menuItem = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 8,
  width: "100%",
  cursor: "pointer",
  fontSize: "0.875rem",
  border: "none",
  marginLeft: -26,
  padding: "8px 16px 8px 26px",
  backgroundColor: "transparent",
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16,
  ":hover": {
    backgroundColor: "#f2f2f2",
  },
});
