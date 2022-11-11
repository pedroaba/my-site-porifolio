import { styled } from "../../styles";

export const TextLink = styled("span", {
  fontFamily: "$roboto",
  fontWeight: "$robotoBold",
  color: "$zinc400",
  lineHeight: 1.6,
  fontSize: "2rem",
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
    color: "$gray300",
  },
});
