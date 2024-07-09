import {
  StyledRootPopUp,
  StyledRootPopUpBackground,
} from "./StyledRootPopUp.js";

export const RootPopUp = ({ children, setShowPopUp, showPopUp }) => {
  return (
    <>
      <StyledRootPopUp showPopUp={showPopUp}>{children}</StyledRootPopUp>
      <StyledRootPopUpBackground
        showPopUp={showPopUp}
        onClick={() => setShowPopUp(false)}
      />
    </>
  );
};
