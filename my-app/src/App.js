import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Authuser from "./components/auth";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} /> authUser
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/authUser" element={<Authuser />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
