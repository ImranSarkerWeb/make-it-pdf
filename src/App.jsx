import { useState } from "react";
import ReactPDF from "@react-pdf/renderer";

import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/MakePdf/MakePdf";
function App() {
  const [count, setCount] = useState(0);

  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
ReactPDF.render(<MyDocument />, `${Downloads}/example.pdf`);
export default App;
