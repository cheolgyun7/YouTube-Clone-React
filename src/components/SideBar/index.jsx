import { NavLink } from 'react-router-dom'
import { MenuSection, MenuListWrapper, MenuItemWrapper } from './style'

function SideBar() {
	return (
		<MenuSection>
			<MenuListWrapper className="mainMenu">
				<li>
					<NavLink to="/566">
						<MenuItemWrapper>홈</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>Shorts</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>구독</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>Originals</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>YouTube Music</MenuItemWrapper>
					</NavLink>
				</li>
			</MenuListWrapper>
			<MenuListWrapper className="playListMenu">
				<li>
					<NavLink>
						<MenuItemWrapper>보관함</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>시청기록</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>내 동영상</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>나중에 볼 동영상</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>좋아요 표시한 동영상</MenuItemWrapper>
					</NavLink>
				</li>
			</MenuListWrapper>
			<MenuListWrapper className="optionMenu">
				<li>
					<NavLink>
						<MenuItemWrapper>설정</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>신고기록</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>고객센터</MenuItemWrapper>
					</NavLink>
				</li>
				<li>
					<NavLink>
						<MenuItemWrapper>의견 보내기</MenuItemWrapper>
					</NavLink>
				</li>
			</MenuListWrapper>
			<div className="copyRight">
				© 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain
				View CA 94043, USA, 0807-882-594 (무료),
				yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보,
				불법촬영물 신고
				<br />
				크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의
				약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에
				대한 책임을 지지 않습니다.
			</div>
		</MenuSection>
	)
}

export default SideBar
