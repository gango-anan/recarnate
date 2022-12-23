import React, { useState, useEffect } from 'react';
import GameLoading from '../components/GameLoading';
import GameBoard from './GameBoard';

const GamePage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isDoneLoading, setIsDoneLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			setIsDoneLoading(true);
		}, 8000);
	}, []);
	return (
		<div>
			{isLoading && <GameLoading />}
			{isDoneLoading && <GameBoard />}
		</div>
	);
};

export default GamePage;
