import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
import {StaticRouter} from "react-router-dom/server";

test("logo should Load on rendering header", () => {
//   const user = { user: { name: "dummy", email: "dummy@dummy.com" } };
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <UserContext.Provider value={null}>
        <Header />
      </UserContext.Provider>
    </Provider>
    </StaticRouter>
  );
  const logo=header.getAllByTestId("logo");
  console.log(logo[0]);

  expect(logo[0].src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZpQh6EY7F3c1fJcvo00FnLgY8IiNs3352A&usqp=CAU");
});


test("online status should be green on rendering header", ()=>{
    const header = render(
        <StaticRouter>
        <Provider store={store}>
          <UserContext.Provider value={null}>
            <Header />
          </UserContext.Provider>
        </Provider>
        </StaticRouter>
      );

      const onlineStatus=header.getByTestId("online-status");
      console.log(onlineStatus);
      expect(onlineStatus.innerHTML).toBe("🟢");
});

test("cart length should be zero initially", ()=>{
    const header = render(
        <StaticRouter>
        <Provider store={store}>
          <UserContext.Provider value={null}>
            <Header />
          </UserContext.Provider>
        </Provider>
        </StaticRouter>
      );

      const cartlen=header.getByTestId("cart");
      expect(cartlen.innerHTML).toBe("Cart- 0 items");
})
