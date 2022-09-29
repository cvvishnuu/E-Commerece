import React from "react";

import AuthStore from "./stores/AuthStore";

const authStore = new AuthStore();

export const StoreContext = React.createContext({
  authStore,
});
