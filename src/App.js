import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { Route, Routes } from "react-router-dom";
import { FaqPage } from "./pages/FaqPage";



function App() {

  return (
      <Routes>
        <Route path="/">
          <Route index element={<SignInPage/>}/>
          <Route path="/chat"  element={<ChatPage/>}/>
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
  
  );
}

export default App;
