"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface ValentineQuestionProps {
	onResponse: (response: boolean) => void;
}

export default function ValentineQuestion({
	onResponse,
}: ValentineQuestionProps) {
	const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
	const noButtonRef = useRef<HTMLButtonElement>(null);
	const yesButtonRef = useRef<HTMLButtonElement>(null);

	const moveNoButton = useCallback(() => {
		if (noButtonRef.current) {
			const buttonRect = noButtonRef.current.getBoundingClientRect();
			const maxX = window.innerWidth - buttonRect.width;
			const maxY = window.innerHeight - buttonRect.height;
			// Move the No button to a random position within bounds
			const newX = Math.max(0, Math.min(maxX, Math.random() * maxX));
			const newY = Math.max(0, Math.min(maxY, Math.random() * maxY));
			setNoButtonPosition({ x: newX, y: newY });
		}
	}, []);

	// Set initial No button position to be right below the Yes button.
	useEffect(() => {
		if (yesButtonRef.current) {
			const yesRect = yesButtonRef.current.getBoundingClientRect();
			setNoButtonPosition({ x: yesRect.left, y: yesRect.bottom + 8 }); // 8px margin below Yes
		} else {
			// Fallback to a random position if the Yes button isn't available
			moveNoButton();
		}

		const handleResize = () => {
			if (yesButtonRef.current) {
				const yesRect = yesButtonRef.current.getBoundingClientRect();
				setNoButtonPosition({ x: yesRect.left, y: yesRect.bottom + 8 });
			} else {
				moveNoButton();
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [moveNoButton]);

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-lg p-8 relative">
				<h1 className="text-3xl font-bold text-center mb-6 text-pink-600 font-crayon transform -rotate-2">
					Will you be my Valentine?
				</h1>
				<div className="flex justify-center mt-8">
					<button
						ref={yesButtonRef}
						onClick={() => onResponse(true)}
						className="bg-pink-400 hover:bg-pink-500 text-white font-crayon text-xl py-2 px-6 rounded-full transform transition-all duration-200 ease-in-out hover:scale-110"
					>
						Yes! 😁
					</button>
				</div>
				<svg
					className="absolute -top-2 -left-2 transform -translate-x-1/4 -translate-y-1/4"
					width="100"
					height="100"
				>
					<path
						d="M10 30 A20 20 0 0 1 50 30 A20 20 0 0 1 90 30 Q90 60 50 90 Q10 60 10 30 Z"
						fill="pink"
					/>
				</svg>
				<svg
					className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4"
					width="100"
					height="100"
				>
					<path
						d="M10 30 A20 20 0 0 1 50 30 A20 20 0 0 1 90 30 Q90 60 50 90 Q10 60 10 30 Z"
						fill="red"
					/>
				</svg>
			</div>
			<button
				ref={noButtonRef}
				onMouseEnter={moveNoButton}
				onClick={() => {
					alert("No way you spent time to try to say no.");
					moveNoButton();
				}}
				className="fixed bg-gray-400 hover:bg-gray-500 text-white font-crayon text-xl py-2 px-6 rounded-full transition-all duration-200 ease-in-out z-50"
				style={{
					left: noButtonPosition.x,
					top: noButtonPosition.y,
				}}
			>
				No 😔
			</button>
		</div>
	);
}
