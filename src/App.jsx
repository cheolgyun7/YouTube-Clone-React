import GlobalStyle from './style/global'
import { Route, Routes } from 'react-router-dom'
// PAGES
import Main from './pages/Main'
import Search from './pages/Search'
import Video from './pages/VideoDetail'
import Header from './components/Header'
import SideBar from './components/SideBar'
import NotFound from './pages/NotFound'

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route element={<Header />}>
					<Route element={<SideBar />}>
						<Route index element={<Main />} />
						<Route path="/search" element={<Search />} />
					</Route>
					<Route path="/video/:id" element={<Video />} />
					<Route path="/*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
