import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("load shimmer on HomePage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  console.log(body);
  expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(15);
});

test("load all Restaurant list on HomePage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const restaurantList = body.getByTestId("restaurant-list");
  // console.log(body);
  // expect(shimmer).toBeInTheDocument();
  expect(restaurantList.children.length).toBe(15);
});

test("load  Restaurant list based on search btn on HomePage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));

  //mocking the data in the serach input field
  const input = body.getByTestId("serach-input");
  fireEvent.change(input, {
    target: {
      value: "momo",
    },
  });

  //clicking the btn
  const serachBtn=body.getByTestId("search-btn");
  fireEvent.click(serachBtn);

  const restaurantList = body.getByTestId("restaurant-list");
  // console.log(body);
  // expect(shimmer).toBeInTheDocument();
  expect(restaurantList.children.length).toBe(2);
});
