import { Outlet, useLocation } from 'react-router-dom'
import SideBar from './SideBar'
import { useMemo } from 'react'

function PageLayout() {
	const pathname = useLocation().pathname
	const sidebarPath = useMemo(() => ['/', '/search'], [])
	return (
		<>
			{sidebarPath.includes(pathname) && <SideBar />}

			<main>
				<Outlet />
			</main>
		</>
	)
}

export default PageLayout
