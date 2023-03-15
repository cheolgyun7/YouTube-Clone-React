import styled from 'styled-components'

export default function ChannelInfoContainer({ props }) {
	return (
		<Container>
			<ChannelInfo>
				<img src={props.snippet.thumbnails.default.url} alt="thumbnail" />
				<ChannelInfoText>
					<div className="title">{props.snippet.title}</div>
					<div className="subscriberCount">
						구독자 {props.statistics.subscriberCount}명
					</div>
				</ChannelInfoText>
				<button>구독</button>
			</ChannelInfo>
			<OptionBtnContainer>
				<button>좋아요 버튼</button>
				<button>공유</button>
				<button>오프라인 저장</button>
				<button>...</button>
			</OptionBtnContainer>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 4px;
`
const ChannelInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	/* justify-content: space-evenly; */
	img {
		width: 40px;
		heigh: 40px;
		border-radius: 50%;
	}
`
const ChannelInfoText = styled.div`
	margin-right: 24px;
	display: flex;
	flex-direction: column;
	gap: 4px;
	.subscriberCount {
		font-size: 12px;
		color: #606060;
	}
`
const OptionBtnContainer = styled.div`
	display: flex;
	gap: 4px;
`
