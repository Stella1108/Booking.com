// app/layout.js
import "../styles/globals.css";

export const metadata = {
  title: "Booking.com Clone",
  description: "Learning prototype with Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}