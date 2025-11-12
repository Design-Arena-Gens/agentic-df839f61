import "./globals.css";

export const metadata = {
  title: "Against All Odds",
  description:
    "A visceral narrative of a lone traveler’s desperate fight for survival against a ferocious lion deep in the African jungle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
