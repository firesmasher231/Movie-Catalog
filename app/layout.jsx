import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata = {
	title: "MovieLog",
	description: "Brought into existence by AJ",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.className} mx-32 my-12 bg-black text-white`}
			>
				{children}
			</body>
		</html>
	);
}
