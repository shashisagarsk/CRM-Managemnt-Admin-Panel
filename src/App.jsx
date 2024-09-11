import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TasksSection from "./components/TasksSection";
import MessagesSection from "./components/MessagesSection";
import AnalyticsSection from "./components/AnalyticsSection";
import PaymentsSection from "./components/PaymentsSection";
import Dashboard from "./components/Dashboard"


const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
      
        {/* Main Content */}
        <div className="w-full">
          <Navbar />
          <Routes>
            
            <Route path="/tasks" element={<TasksSection />} />
            <Route path="/messages" element={<MessagesSection />} />
            <Route path="/analytics" element={<AnalyticsSection />} />
            <Route path="/payments" element={<PaymentsSection />} />
            <Route  path="/Dashboard" element={<Dashboard />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
