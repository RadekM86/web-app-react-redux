import React from "react";
import Box from "./Box";

export default function ListItem({ children }) {
  return (
    <li>
      <Box>{children}</Box>
    </li>
  );
}
