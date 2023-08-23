import React from "react";
import styles from "./layout.module.css";

type ProductsLayoutProps = {
  children: React.ReactNode;
};

const ProductsLayout = ({ children }: ProductsLayoutProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default ProductsLayout;
