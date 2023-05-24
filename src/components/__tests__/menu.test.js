import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MENU_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";
import Restaurantmenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <Restaurantmenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("add-Btn");
  fireEvent.click(addBtn[0]);

  const cartLen = body.getByTestId("cart");
  // console.log(body);
  // expect(shimmer).toBeInTheDocument();
  expect(cartLen.innerHTML).toBe("Cart- 1 items");
});
