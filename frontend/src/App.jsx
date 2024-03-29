import { BrowserRouter, Routes, Route } from "react-router-dom"

//PAGES
import Login from "./pages/login.jsx";
import Chat from "./pages/chat.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
