import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
// import VideoInfoCard from '../components/VideoInfoCard'

const Main = ({}) => {
	const [playlist, setPlaylist] = useState([])
	useEffect(() => {
		axios
			.get(
				'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCZmSMmjRPzSl8o8u6KUIR4Nf8J2v1DJGs'
			)
			.then((res) => {
				console.log(res)
				setPlaylist(res.data.items)
			})
			.catch(() => {})
	}, [])

	console.log(playlist)

	return (
		<>
			<VideoCard>
				<div className="filterWrapper">
					<div className="filterItem">전체</div>
					<div className="filterItem">실시간</div>
					<div className="filterItem">음악</div>
					<div className="filterItem">뉴스</div>
					<div className="filterItem">게임</div>
					<div className="filterItem">수학</div>
				</div>
			</VideoCard>
			<VideoList>
				<div className="videoComponent">
					{playlist &&
						playlist.map((i, idx) => {
							return (
								<div className="playlist" key={idx}>
									<img src={i.snippet.thumbnails.high['url']} alt="" />
									<div>
										<div>{i.snippet.localized['title']}</div>
										<div>{i.snippet.channelId}</div>
									</div>
									{/* <VideoInfoCard /> */}
								</div>
							)
						})}
				</div>
			</VideoList>
		</>
	)
}

const VideoCard = styled.div`
	.filterWrapper {
		width: -webkit-fill-available;
		position: sticky;
		top: 0;
		z-index: 4;
		justify-content: left;
		align-self: start;
		align-items: center;
		display: flex;
		padding: 0 15px 8px;
		background-color: #fff;
	}

	.filterItem {
		padding: 5px 10px;
		margin: 6px;
		border-radius: 10px;
		background-color: #0000000d;
	}
`
const VideoList = styled.div`
	.videoComponent {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		box-sizing: border-box;
		height: fit-content;
		flex-direction: row;
		column-gap: 16px;
		align-items: flex-start;
	}
	.playlist {
		width: 24%;
	}
	.playlist > img {
		width: 100%;
	}

	.videoWrap {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 40px 0;
		gap: 8px;
		position: relative;
		align-items: stretch;
		flex: 1;
	}

	.videoView {
		width: inherit;
		aspect-ratio: 16/9;
		background: #a0a0a0;
		border-radius: 16px;
		flex: none;
		order: 0;
		flex-grow: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		object-fit: fill;
	}

	.videoInfo {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0;
		height: 60px;
		border-radius: 16px;
		flex: none;
	}

	.channelName {
		width: 100%;
		height: 24px;
		border-radius: 12px;
		flex: none;
	}

	.videoStatus {
		width: 100%;
		height: 24px;
		border-radius: 30px;
		flex: none;
		order: 3;
		align-self: stretch;
		flex-grow: 0;
	}
`

export default Main
