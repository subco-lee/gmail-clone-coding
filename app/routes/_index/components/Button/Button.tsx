import { forwardRef } from "react";
import * as styles from "./styles.css"; // Note that `.ts` is omitted here

export const Button = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>((props, forwardedRef) => {
  return <button {...props} ref={forwardedRef} className={styles.root} />;
});
