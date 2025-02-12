"use client";

import { useState } from "react";
import PasswordEntry from "./components/password-entry";
import ValentineQuestion from "./components/valentine-question";
import ValentineContent from "./components/valentine-content";
import "./mylove.generated.css";

export default function ValentinePage() {
	const [state, setState] = useState<"password" | "question" | "content">(
		"password"
	);
	const [passwordError, setPasswordError] = useState("");
	const correctPassword = "4am"; // Change this to your desired password

	const handlePasswordSubmit = (password: string) => {
		if (password.toLowerCase() === correctPassword) {
			setState("question");
			setPasswordError("");
		} else {
			// Instead of an alert, set a hint message that appears under the input
			setPasswordError("Hint: Your Story Name");
		}
	};

	const handleValentineResponse = (response: boolean) => {
		if (response) {
			setState("content");
		}
	};

	return (
		<div className="min-h-screen bg-paper flex items-center justify-center p-4">
			<div className="w-full max-w-md relative">
				<div className="absolute inset-0 bg-white opacity-70 rounded-lg"></div>
				{state === "password" && (
					<PasswordEntry
						onSubmit={handlePasswordSubmit}
						error={passwordError}
					/>
				)}
				{state === "question" && (
					<ValentineQuestion onResponse={handleValentineResponse} />
				)}
				{state === "content" && (
					<ValentineContent
						imageUrls={[
							"/images/IMG_5552.JPG",
							"/images/IMG_5838.JPG",
							"/images/IMG_5944.JPG",
							"/images/IMG_6079.JPG",
						]}
					/>
				)}
			</div>
		</div>
	);
}
