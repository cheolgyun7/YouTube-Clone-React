import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',

	params: {
		key: import.meta.env.VITE_YOUTUBE_API_KEY,
	},
})

// export const getChannelImg = async (channelId) => {
// 	const response = await instance.get('/channels', {
// 		params: {
// 			part: 'snippet',
// 			id: channelId,
// 		},
// 	});

// 	return response.data.items[0].snippet.thumbnails.default.url;
// };
