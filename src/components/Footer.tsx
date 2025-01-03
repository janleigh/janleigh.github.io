export function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<div id="footer" className="flex w-full justify-center bg-verdant-bg lg:fixed lg:bottom-10">
			<div className="mx-auto flex justify-center">
				<span className="px-4 py-4 text-center text-verdant-fg lg:px-0">
					© {getCurrentYear()} <span className="text-verdant-blue">Jan Leigh Muñoz</span>. All Rights
					Reserved.
				</span>
			</div>
		</div>
	);
}

export default Footer;
