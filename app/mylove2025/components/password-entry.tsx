"use client";

import { useState } from "react";

interface PasswordEntryProps {
	onSubmit: (password: string) => void;
	error?: string;
}

export default function PasswordEntry({ onSubmit, error }: PasswordEntryProps) {
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(password);
	};

	return (
		<div className="relative z-10 p-6">
			<h1 className="text-3xl font-bold text-center mb-6 text-pink-600 font-crayon transform -rotate-2">
				What&apos;s the password?
			</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="relative">
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full px-4 py-2 bg-white border-4 border-pink-400 rounded-full text-center font-crayon text-xl text-black focus:outline-none focus:border-pink-600"
						style={{ borderStyle: "solid" }}
						placeholder="Type here..."
					/>
					<svg
						className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1"
						width="200"
						height="20"
					>
						<path
							d="M10 10 Q50 20 100 10 Q150 0 190 10"
							stroke="pink"
							strokeWidth="4"
							fill="none"
						/>
					</svg>
				</div>

				{/* Display hint if error message exists */}
				{error && (
					<p className="mt-2 text-center text-sm text-red-500">{error}</p>
				)}

				<button
					type="submit"
					className="w-full bg-pink-400 hover:bg-pink-500 text-white font-crayon text-xl py-2 px-4 rounded-full transform hover:scale-105 transition-transform duration-200 ease-in-out"
				>
					Enter! 🐼
				</button>
			</form>
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
	);
}
