export const goToSignUpPage = (navigate) => {
  navigate("/signup");
};

export const goToLogInPage = (navigate) => {
  navigate("/");
};

export const goToBudgetPage = (navigate, id) => {
  navigate(`/budget/${id}`);
};

export const goToCommentsPage = (navigate, id) => {
  navigate(`/feed/${id}`);
};
