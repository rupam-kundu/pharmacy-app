import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MedicinesList from "./components/MedicinesList";
import AddMed from "./components/AddMedicine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MedicinesList />} />
          <Route path="list" element={<MedicinesList />} />
          <Route path="add" element={<AddMed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
