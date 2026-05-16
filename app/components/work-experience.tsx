export function WorkExperience() {
	const experiences = [
		{
			company: "rox",
			url: "https://rox.com",
		},
		{
			company: "palantir",
			url: "https://www.palantir.com",
		},
		{
			company: "apple",
			url: "https://www.apple.com",
		},
	];

	return (
		<>
			{experiences.map((exp) => (
				<span key={exp.company}>
					<a
						href={exp.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#0000ee] underline visited:text-[#551a8b]"
					>
						{exp.company}
					</a>
					{exp === experiences[experiences.length - 1] ? null : " / "}
				</span>
			))}
		</>
	);
}
