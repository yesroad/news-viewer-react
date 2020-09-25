/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
	display: flex;
	margin-top: 1rem;

	.thumbnail {
		margin-right: 1rem;

		img {
			display: block;
			width: 160px;
			height: 100px;
			object-fit: cover;
		}
	}
	.contents {
		h2 {
			font-size: 1.25rem;
			padding-bottom: 0.5rem;
			a {
				color: #000;
				text-decoration: none;
			}
		}
		p {
			font-size: 1rem;
			color: #1c1c1c;
			line-height: 1.25rem;
			margin-top: 0.5rem;
		}
		& + & {
			margin-top: 3rem;
		}
	}
`;

function NewsItem({ article }) {
	const { title, description, url, urlToImage } = article;
	return (
		<NewsItemBlock>
			{urlToImage && (
				<div className='thumbnail'>
					<a href={url} target='_blank'>
						<img src={urlToImage} alt='' />
					</a>
				</div>
			)}
			<div className='contents'>
				<h2>
					<a href={url} target='_blank'>
						{title}
					</a>
				</h2>
				<p>{description}</p>
			</div>
		</NewsItemBlock>
	);
}

export default NewsItem;
