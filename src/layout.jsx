import "./globals.css";

export const metadata = {
  title: "Winterfell",
  description: "Winterfell Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}