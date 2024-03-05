import {
  StyledRootPopUp,
  StyledRootPopUpBackground,
} from "./StyledRootPopUp.js";

export const RootPopUp = ({ children, closePopUp }) => {
  return (
    <>
      <StyledRootPopUp>{children}</StyledRootPopUp>
      <StyledRootPopUpBackground onClick={() => closePopUp(false)} />
    </>
  );
};
