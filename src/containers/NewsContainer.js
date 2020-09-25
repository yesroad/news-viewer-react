import React, { useState } from 'react';
import axios from 'axios';

function NewsContainer() {
	const [data, setData] = useState();
	const onClick = async () => {
		try {
			const response = await axios.get(
				'http://newsapi.org/v2/top-headlines?country=kr&apiKey=9e9fff586d5d45f8a00a40cde8b1400f',
			);
			setData(response.data);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div>
			<button onClick={onClick}>불러오기</button>
			{data && (
				<textarea rows='7' value={JSON.stringify(data, null, 2)}></textarea>
			)}
		</div>
	);
}

export default NewsContainer;
