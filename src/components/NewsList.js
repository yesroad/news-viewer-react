import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	max-width: 960px;
	width: 100%;
	margin: 0 auto;
	margin-top: 2rem;
`;

function NewsList() {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					'http://newsapi.org/v2/top-headlines?country=kr&apiKey=9e9fff586d5d45f8a00a40cde8b1400f',
				);
				setArticles(response.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) return <NewsListBlock>Loading...</NewsListBlock>;
	if (!articles) return null;

	return (
		<NewsListBlock>
			{articles.map(
				(article) =>
					article.urlToImage && (
						<NewsItem key={article.url} article={article} />
					),
			)}
		</NewsListBlock>
	);
}

export default NewsList;
