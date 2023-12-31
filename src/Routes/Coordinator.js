export const goToSignUpPage = (navigate) => {
  navigate("/signup");
};

export const goToLogInPage = (navigate) => {
  navigate("/");
};

export const goToSummaryPage = (navigate, id) => {
  navigate(`/summary`);
};

export const goToCommentsPage = (navigate, id) => {
  navigate(`/feed/${id}`);
};

export const goToPage = (navigate, path) => {
  navigate(path);
};
