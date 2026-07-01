import "./App.css";
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

      <main>

  
       <Home/>
         <Footer />

      </main>

    
    </>
  );
}

export default App;