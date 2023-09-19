import { rest } from "msw";
import { BASE_URL } from "../constants";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// http://localhost:3003/users/signup
export const handlers = [
  rest.post("http://localhost:3003/users/signup", (req, res, ctx) => {
    if (req.json.email === "rottschaefer54@gmail.com") {
      return res(ctx.status(404).res({ message: "Email já cadastrado" }));
    }
    return res(ctx.status(200), ctx.json({ token: "token-mock-fulano" }));
  }),

  rest.post("http://localhost:3003/users/login", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: "token-mock-fulano",
        payload: { id: "id-fulano", name: "Teste", role: "NORMAL" },
      })
    );
  }),

  rest.get(`${BASE_URL}/expenses`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          creatorId: "ebbc47b8-1c17-4017-a02c-b92d5bdac488",
          name: "Mobilidade",
          createdAt: "2023-09-10 22:45:24",
          spent: 10,
          toSpend: 200,
          updatedAt: "2023-09-10 22:45:24",
        },
      ])
    );
  }),

  rest.post(`${BASE_URL}/expenses`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: req.headers.authorization,
        name: "Teste AddExpense",
        spent: 1400,
        toSpend: 20000,
      })
    );
  }),

  // rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
  //   return res(
  //     ctx.json([
  //       { name: "Cherries", imagePath: "images/cherries.png" },
  //       { name: "M&Ms", imagePath: "images/m-and-ms.png" },
  //       { name: "Hot fudge", imagePath: "images/hot-fudge.png" },
  //     ])
  //   );
  // }),
  // rest.post("http://localhost:3030/order", async (req, res, ctx) => {
  //   // add a 100ms pause here to give jest a chance to see the "loading" state.
  //   // See https://www.udemy.com/course/react-testing-library/learn/lecture/36703860
  //   //   for more details.
  //   await sleep(100);
  //   return res(ctx.json({ orderNumber: 123455676 }));
  // }),
];
