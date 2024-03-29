import styled from "styled-components";

const FormWrapper = styled("div")({
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 15,
  paddingRight: 15,
});

export const FormButtons = styled("div")({
  paddingTop: "16px",
  display: "flex",

  "& > *": {
    marginRight: "8px",
    marginBottom: "8px",
  },
});

export default FormWrapper;
