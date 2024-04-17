import axios from "axios";
import { useEffect, useState } from "react";
import { PluggyConnect } from "react-pluggy-connect";
import { StyledPluggyPage, StyledText } from "./StyledPluggyPage";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import { BASE_URL } from "../../constants";

export const PluggyPage = (props) => {
  const navigate = useNavigate();

  const [connectToken, setConnectToken] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const initialSetup = async () => {
    console.log(config);
    const response = await axios.get(`${BASE_URL}/auth/connect-token`, config);

    const newConnectToken = response.data.connectToken;

    setConnectToken(newConnectToken);
  };

  useEffect(() => {
    initialSetup();
  }, []);

  const onSuccess = async (itemData) => {
    try {
      console.log(itemData.item.connector.name);
      console.log(itemData.item.connector.primaryColor);
      console.log(itemData.item.connector.institutionUrl);
      console.log(itemData.item.connector.imageUrl);
      const bodyItems = {
        pluggy_id: itemData.item.id,
      };

      const bodyAccounts = {
        account: {
          item_id: itemData.item.id,
        },
      };
      const responseItems = await axios.post(
        `${BASE_URL}/items`,
        bodyItems,
        config
      );
      const responseAccounts = await axios.post(
        `${BASE_URL}/accounts`,
        bodyAccounts,
        config
      );

      const responseTransactions = await axios.get(
        `${BASE_URL}/categories/transactions?accountId=${responseAccounts.data.pluggy_id}`,
        config
      );

      console.log(
        responseItems.data,
        responseAccounts.data,
        responseTransactions.data
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const onError = (error) => {
    // handle the error
  };

  return (
    <StyledPluggyPage>
      {connectToken && (
        <PluggyConnect
          connectToken={connectToken}
          // includeSandbox={true}
          onSuccess={onSuccess}
          onError={onError}
        />
      )}
      <StyledText onClick={() => goToPage(navigate, "/summary")}>
        Voltar para o Início
      </StyledText>
    </StyledPluggyPage>
  );
};
