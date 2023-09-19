import { PluggyConnect } from "react-pluggy-connect";

export const PluggyTestPage = (props) => {
  const onSuccess = (itemData) => {
    // do something with the financial data
  };

  const onError = (error) => {
    // handle the error
  };

  return (
    <PluggyConnect
      connectToken=""
      includeSandbox={true}
      onSuccess={onSuccess}
      onError={onError}
    />
  );
};
