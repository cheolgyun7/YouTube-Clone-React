import styled from 'styled-components'

export default function VideoInfo({ props }) {
	return (
		<div>
			<VideoInfoContainer>
				<VideoOptionInfo>
					<div>조회수 {props.statistics.viewCount}회</div>
					<div>{props.snippet.publishedAt}</div>
					{/* <div>{props.snippet.tags}</div> */}
				</VideoOptionInfo>
				<VideoDescription>{props.snippet.description}</VideoDescription>
			</VideoInfoContainer>
		</div>
	)
}

const VideoInfoContainer = styled.div`
	/* width: 100%; */
	padding: 12px;
	box-sizing: border-box;
	border-radius: 12px;
	background-color: #f2f2f2;
	line-height: 20px;
`
const VideoOptionInfo = styled.div`
	display: flex;
	gap: 4px;
	font-size: 14px;
	/* line-height: 20px; */
	font-weight: 500;
`
const VideoDescription = styled.p`
	white-space: break-spaces;
	word-break: break-all;
`
