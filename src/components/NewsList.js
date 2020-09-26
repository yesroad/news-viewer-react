import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	max-width: 960px;
	width: 100%;
	margin: 0 auto;
	margin-top: 2rem;
`;

function NewsList({ category }) {
	const [loading, response, error] = usePromise(() => {
		const API_KEY = '9e9fff586d5d45f8a00a40cde8b1400f';
		const query = category === 'all' ? '' : `&category=${category}`;
		return axios.get(
			`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`,
		);
	}, [category]);

	if (loading) return <NewsListBlock>Loading...</NewsListBlock>;
	if (!response) return null;
	if (error) return <NewsListBlock>Error</NewsListBlock>;

	const { articles } = response.data;
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
