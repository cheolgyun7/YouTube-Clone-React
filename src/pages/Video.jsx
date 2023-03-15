import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { videoQuery, channelQuery, commentQuery } from '../atom'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import ChannelInfoContainer from '../components/Video/ChannelInfoContainer'
import VideoInfo from '../components/Video/VideoInfo'
import CommentContainer from '../components/Video/CommentContainer'
import RelativedVideos from '../components/RelatedVieos'

function Video() {
	const { id: videoId } = useParams()
	const videoData = JSON.parse(window.localStorage.getItem('currentVideo'))
	const [videoItemData, setVideoItemData] = useState(...videoData)
	const channelData = JSON.parse(window.localStorage.getItem('currentChannel'))
	const [channelItemData, setChannelItemData] = useState(...channelData)

	if (!videoData) {
		console.log(videoData)
		setVideoItemData(...useRecoilValue(videoQuery(videoId)))
		window.localStorage.setItem('currentVideo', JSON.stringify(videoItemData))

		// 채널 정보 가져오는 코드
		const channelId = videoItemData.snippet.channelId
		setChannelItemData(...useRecoilValue(channelQuery(channelId)))
		window.localStorage.setItem(
			'currentChannel',
			JSON.stringify(channelItemData)
		)
		// 댓글 정보
		const comment = useRecoilValue(commentQuery(videoId))
		console.log(comment)
	}

	return (
		<Layout>
			<LeftPane>
				<StyledYouTube
					videoId={videoId}
					opts={{
						width: '100%',
						height: '100%',
						playerVars: {
							autoplay: 0,
						},
					}}
				/>
				<h2>{videoItemData?.snippet.title}</h2>
				<ChannelInfoContainer props={channelItemData} />
				<VideoInfo props={videoItemData} />
				<CommentContainer />
			</LeftPane>
			<RightPane>
				Video
				<RelativedVideos />
			</RightPane>
		</Layout>
	)
}

const Layout = styled.div`
	display: flex;
	button {
		border: 0;
		padding: 0 16px;
		height: 36px;
		font-size: 14px;
		line-height: 36px;
		border-radius: 18px;
		background-color: #f2f2f2;
		cursor: pointer;
	}
`
const LeftPane = styled.div`
	min-width: 427px;
	padding: 24px 24px 0 0;
	margin-left: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	h2 {
		font-size: 20px;
		font-weight: 600;
	}
`
const StyledYouTube = styled(YouTube)`
	/* width: 100%; */
	iframe {
		padding-bottom: 56.25%;
		box-sizing: content-box;
	}
`
const RightPane = styled.div``

export default Video
