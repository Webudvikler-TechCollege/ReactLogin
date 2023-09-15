import { Route, Routes } from "react-router-dom"
import Login from "../Auth/Login"
import Post from "../Post/Post"
import Home from "../Home/Home"

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/post/:event_id" element={<Post />} />
		</Routes>
	)
}

export default AppRouter