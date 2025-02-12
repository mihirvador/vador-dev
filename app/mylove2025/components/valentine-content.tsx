"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FloatingImage {
	id: number;
	x: number;
	y: number;
	vx: number;
	vy: number;
	width: number;
	height: number;
	src: string;
}

interface ValentineContentProps {
	// Pass in an array of image URLs (relative to the public folder, e.g., "/images/myImage.png")
	imageUrls?: string[];
}

export default function ValentineContent({ imageUrls }: ValentineContentProps) {
	const [images, setImages] = useState<FloatingImage[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;
		const { clientWidth, clientHeight } = containerRef.current;

		// Use provided image URLs or fallback to defaults from your images folder
		const defaultUrls =
			imageUrls && imageUrls.length > 0
				? imageUrls
				: [
						"/images/next.svg",
						"/images/next.svg",
						"/images/next.svg",
						"/images/next.svg",
				  ];

		// We'll assign sizes based on a small lookup array.
		const sizes = [
			{ width: 200, height: 200 },
			{ width: 200, height: 200 },
			{ width: 200, height: 200 },
			{ width: 200, height: 200 },
		];

		const generatedImages: FloatingImage[] = defaultUrls.map((url, index) => {
			const size = sizes[index % sizes.length] || { width: 100, height: 100 };
			// Generate a random initial position within the container
			const x = Math.random() * (clientWidth - size.width);
			const y = Math.random() * (clientHeight - size.height);
			// Use a fixed speed which can be randomized further if you like.
			const vx = Math.random() < 0.5 ? 2 : -2;
			const vy = Math.random() < 0.5 ? 2 : -2;
			return {
				id: index + 1,
				x,
				y,
				vx,
				vy,
				width: size.width,
				height: size.height,
				src: url,
			};
		});

		setImages(generatedImages);

		const moveImages = () => {
			setImages((prevImages) =>
				prevImages.map((img) => {
					let newX = img.x + img.vx;
					let newY = img.y + img.vy;
					let newVx = img.vx;
					let newVy = img.vy;

					// Check collision with container edges
					if (newX <= 0 || newX + img.width >= clientWidth) {
						newVx = -newVx;
						newX = newX <= 0 ? 0 : clientWidth - img.width;
					}
					if (newY <= 0 || newY + img.height >= clientHeight) {
						newVy = -newVy;
						newY = newY <= 0 ? 0 : clientHeight - img.height;
					}

					// Check collision with card element
					if (cardRef.current) {
						const cardRect = cardRef.current.getBoundingClientRect();
						const imgRect = {
							left: newX,
							right: newX + img.width,
							top: newY,
							bottom: newY + img.height,
						};

						if (
							imgRect.left < cardRect.right &&
							imgRect.right > cardRect.left &&
							imgRect.top < cardRect.bottom &&
							imgRect.bottom > cardRect.top
						) {
							// Determine which side of the card was hit
							const overlapLeft = imgRect.right - cardRect.left;
							const overlapRight = cardRect.right - imgRect.left;
							const overlapTop = imgRect.bottom - cardRect.top;
							const overlapBottom = cardRect.bottom - imgRect.top;

							const minOverlap = Math.min(
								overlapLeft,
								overlapRight,
								overlapTop,
								overlapBottom
							);

							if (minOverlap === overlapLeft || minOverlap === overlapRight) {
								newVx = -newVx;
							} else {
								newVy = -newVy;
								newY =
									minOverlap === overlapTop
										? cardRect.top - img.height
										: cardRect.bottom;
							}
						}
					}

					return { ...img, x: newX, y: newY, vx: newVx, vy: newVy };
				})
			);
		};

		const animationId = setInterval(moveImages, 50);
		return () => clearInterval(animationId);
	}, [imageUrls]);

	return (
		<div ref={containerRef} className="fixed inset-0 overflow-hidden">
			{images.map((img) => (
				<div
					key={img.id}
					className="absolute transition-all duration-50 ease-linear"
					style={{ left: `${img.x}px`, top: `${img.y}px` }}
				>
					<Image
						src={img.src}
						alt={`Floating memory ${img.id}`}
						width={img.width}
						height={img.height}
						className="rounded-lg shadow-lg"
					/>
				</div>
			))}
			<div className="flex items-center justify-center min-h-screen">
				<div
					ref={cardRef}
					className="bg-white rounded-lg shadow-lg p-8 relative max-w-md"
				>
					<h1 className="text-3xl font-bold text-center mb-6 text-pink-600 font-crayon transform -rotate-3">
						😭😭 You said Yes 😭😭
					</h1>
					<div className="space-y-4 text-center">
						<p className="font-crayon text-xl text-gray-700 transform rotate-1">
							What I think of when I see you
						</p>
						<div className="flex justify-center items-center space-x-2">
							{["🐼", "🐼", "🐒", "🐒"].map((heart, index) => (
								<span
									key={index}
									className="text-4xl animate-bounce"
									style={{ animationDelay: `${index * 0.2}s` }}
								>
									{heart}
								</span>
							))}
						</div>
						<p className="font-crayon text-xl text-gray-700 transform -rotate-2">
							Here is to 4 months of memories
						</p>
						<ul className="font-crayon text-lg text-gray-700 space-y-2">
							<li className="transform rotate-1">
								And hopefully many more to come
							</li>
							<li className="transform -rotate-1">
								To the world&apos;s most special girl
							</li>
							<li className="transform rotate-2">I love you Amulya</li>
						</ul>
						<p className="font-crayon text-xl text-pink-600 mt-6 transform rotate-3">
							❤️ Happy Valentine&apos;s Day ❤️
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
