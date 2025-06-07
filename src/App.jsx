import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/post" />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/dados/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;