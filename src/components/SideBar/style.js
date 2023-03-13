import styled from 'styled-components'

export const MenuSection = styled.div`
	position: fixed;
	z-index: 999;
	top: 56px;
	left: 0;
	width: 240px;
	height: 100vh;
	padding: 0 12px;
	.copyRight {
		padding: 15px 0;
		color: rgba(0, 0, 0, 0.5);
		font-size: 0.8rem;
		line-height: 1.3rem;
	}
`

export const MenuListWrapper = styled.ul`
	padding: 15px 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	a {
		display: block;
		border-radius: 10px;
		&:hover {
			font-weight: 700;
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
`

export const MenuItemWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	padding: 0 10px;
`
