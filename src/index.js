import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const rootElement = document.getElementById("root");
// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  // Provide the client to your App
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  rootElement
);
