import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexCenterBox = styled.div`
  ${FlexCenter}
`;
