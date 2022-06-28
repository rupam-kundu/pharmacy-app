import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { ThemeProvider, Theme } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Layout from "./components/Layout";
import MedicinesList from "./components/MedicinesList";
import AddMed from "./components/AddMedicine";
import EditMed from "./components/EditMedicine";

Amplify.configure(awsExports);

const theme = {
  name: "my-theme",
  tokens: {
    colors: {
      brand: {
        primary: {
          80: {
            value: "#3B2F4F",
          },
        },
      },
      font: {
        primary: {
          value: "#3B2F4F",
        },
      },
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator>
        {({ signOut }) => (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout signOut={signOut} />}>
                <Route index element={<MedicinesList />} />
                <Route path="list" element={<MedicinesList />} />
                <Route path="add" element={<AddMed />} />
                <Route path="edit" element={<EditMed />} />
              </Route>
            </Routes>
          </BrowserRouter>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;
