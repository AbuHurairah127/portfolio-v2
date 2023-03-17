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
      <body>{children}</body>
    </html>
  );
}
