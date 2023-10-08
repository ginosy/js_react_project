import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact"
import { AddTodo } from "./components/AddTodo";
import { TodoLists } from "./components/TodoLists";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="container p-4 mt-2">
      <h2>Todo Application</h2>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/todo" element={
            <div>
              <AddTodo />
              <TodoLists />
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
