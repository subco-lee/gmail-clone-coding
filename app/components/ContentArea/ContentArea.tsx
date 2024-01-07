import { ReactNode } from "react";
import * as styles from "./ContentArea.css";

interface ContentAreaProps {
  children: ReactNode;
}

export const ContentArea = ({ children }: ContentAreaProps) => {
  return <div className={styles.root}>{children}</div>;
};
