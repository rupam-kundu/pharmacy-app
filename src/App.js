import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Layout from "./components/Layout";
import MedicinesList from "./components/MedicinesList";
import AddMed from "./components/AddMedicine";
import EditMed from "./components/EditMedicine";

Amplify.configure(awsExports);

function App() {
  return (
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
  );
}

export default App;
