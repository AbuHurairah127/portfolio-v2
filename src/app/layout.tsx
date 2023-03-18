import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
export const metadata = {
  title: "Abu Hurairah",
  description:
    "A certified web and mobile application developer || MERN Stack Developer || React Native Developer || Nextjs Developer || Typescript Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden w-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
