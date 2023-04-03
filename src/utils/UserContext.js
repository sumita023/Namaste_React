import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "dummy",
    email: "dummy@dummy.com",
  },
});

//give the dispalyname for debugging
UserContext.displayName="UserContext";
export default UserContext;
