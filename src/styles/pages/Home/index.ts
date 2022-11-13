import Image from "next/image";
import { styled } from "../..";

export const AboutMeContainer = styled("main", {
  height: "fit-content",
  alignSelf: "stretch",

  padding: "3.75rem 3.125rem",
  // paddingBottom: 0,
  backgroundColor: "$gray200",

  display: "flex",
  flexDirection: "column",

  justifyContent: "flex-start",
  alignItems: "flex-start",

  gap: "2.5rem",

  h1: {
    fontSize: "2rem",
    fontWeight: "700",
  },

  p: {
    maxWidth: "45rem",
    textIndent: 64,
  },
});

export const AboutMe = styled("section", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",

  height: "fit-content",

  gap: "13.75rem",

  h3: {
    fontWeight: "700",
    fontSize: "1.25rem",
  },
});

export const AboutMeItem = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "flex-start",
  alignItems: "flex-start",

  gap: "1rem",
});

export const List = styled("ul", {
  marginLeft: "1rem",
});

export const ItemList = styled("li", {
  fontSize: ".85rem",
  fontWeight: "700",

  textDecoration: "underline",

  color: "$blue700",

  cursor: "pointer",

  "&:hover": {
    color: "$blue500",
  },
});

export const ImageBottom = styled(Image, {
  position: "absolute",

  bottom: 0,
  marginBottom: -230,

  variants: {
    position: {
      right: {
        right: 0,
      },
      left: {
        left: 0,
      },
    },
  },
});