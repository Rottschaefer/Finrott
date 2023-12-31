import axios from "axios";
import { useEffect, useState } from "react";
import { PluggyConnect } from "react-pluggy-connect";

export const PluggyTestPage = (props) => {
  const [connectToken, setConnectToken] = useState("");

  // localStorage.setItem(
  //   "token",
  //   JSON.stringify(
  //     "eyJhbGciOiJIUzI1NiJ9.InRlc3RlMkBnbWFpbC5jb20i.2W82IpNy1000d9syE8AQ35wWVIFDi2i4j5yV0ohLohs"
  //   )
  // );
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const initialSetup = async () => {
    const response = await axios.get(
      "http://localhost:3000/auth/connect-token",
      config
    );

    const newConnectToken = response.data.connectToken;

    setConnectToken(newConnectToken);

    // const body = {
    //   pluggy_id: "537f45a0-505a-40e3-a8da-1aa0d0b8efb92d",
    //   user_id: 1,
    // };
    // const response2 = await axios.post(
    //   "http://localhost:3000/items",
    //   body,
    //   config
    // );
    // console.log(response2.data);
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
      const body = {
        pluggy_id: itemData.item.id,
      };
      const response = await axios.post(
        "http://localhost:3000/items",
        body,
        config
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onError = (error) => {
    // handle the error
  };

  return (
    <>
      {connectToken && (
        <PluggyConnect
          connectToken={connectToken}
          // includeSandbox={true}
          onSuccess={onSuccess}
          onError={onError}
        />
      )}
    </>
  );
};
