import "./App.css";

import Cursor from "./components//Cursor.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Counter from "./components/Counter.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #E84035",
            borderRadius: "10px",
            padding: "16px",
          },
        }}
      />  
      <Cursor />

      <main>

  
       <Home/>

      </main>

      <Footer />
    </>
  );
}

export default App;