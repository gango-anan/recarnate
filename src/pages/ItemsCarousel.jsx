import React, { useEffect, useRef, useState } from 'react';
import { disposalItems } from '../data/data';
import closeButtonIcon from '../data/images/CancelIcon.svg';
import '../styles/ItemsCarousel.css';

const ItemsCarousel = ({ closeCarousel, saveSelectedItem }) => {
	const maxScrollWidth = useRef(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsToRender, setItemsToRender] = useState([...disposalItems]);
	const carousel = useRef(null);

	const movePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	const moveNext = () => {
		if (
			carousel.current !== null &&
			carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
		) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const isDisabled = (direction) => {
		if (direction === 'prev') {
			return currentIndex <= 0;
		}

		if (direction === 'next' && carousel.current !== null) {
			return (
				carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
			);
		}

		return false;
	};

	useEffect(() => {
		if (carousel !== null && carousel.current !== null) {
			carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
		}
	}, [currentIndex]);

	useEffect(() => {
		maxScrollWidth.current = carousel.current
			? carousel.current.scrollWidth - carousel.current.offsetWidth
			: 0;
	}, []);

	const handleClick = (event) => {
		const itemIndex = +event.target.getAttribute('data-item-index');
		const item = itemsToRender.splice(itemIndex, 1);
		saveSelectedItem(item);
		setItemsToRender([...itemsToRender]);
		closeCarousel();
	};

	return (
		<div className='carousel my-2'>
			<div className='mx-10 mb-2 flex justify-between items-center'>
				<h2 className='text-lg leading-6 font-semibold  text-white'>
					Select Item
				</h2>
				<button
					onClick={closeCarousel}
					className='w-4 h-4'>
					<img
						src={closeButtonIcon}
						alt='close button'
						className='w-100 h-auto'
					/>
				</button>
			</div>
			<div className='relative overflow-hidden'>
				<div className='flex justify-between absolute top left w-full h-full'>
					<button
						onClick={movePrev}
						className='carousel-scroll-button text-white w-10 h-3/4 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300'
						disabled={isDisabled('prev')}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-10'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15 19l-7-7 7-7'
							/>
						</svg>
						<span className='sr-only'>Prev</span>
					</button>
					<button
						onClick={moveNext}
						className='carousel-scroll-button text-white w-10 h-3/4 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300'
						disabled={isDisabled('next')}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-10'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 5l7 7-7 7'
							/>
						</svg>
						<span className='sr-only'>Next</span>
					</button>
				</div>
				<div
					ref={carousel}
					className='carousel-container relative flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 mx-11'>
					{itemsToRender.map((item, index) => {
						return (
							<div
								key={`item-${index}`}
								className='carousel-item text-center w-32 h-32 snap-start'>
								<button
									className='h-full w-full aspect-square block bg-origin-padding bg-center bg-contain bg-no-repeat z-0 relative'
									style={{
										backgroundImage: `url(${item.image || ''})`,
									}}
									data-item-index={`${index}`}
									onClick={handleClick}>
									<img
										src={item.image || ''}
										alt={item.name}
										className='w-full aspect-square hidden'
									/>
									<div className='w-full text-white text-xs text-center tracking-wide absolute left-0 bottom-0'>
										{item.name}
									</div>
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ItemsCarousel;
