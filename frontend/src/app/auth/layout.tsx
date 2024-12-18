import localFont from "next/font/local";

const satoshi = localFont({
  src: "../fonts/Satoshi-Medium.woff",
  variable: "--font-satoshi",
  weight: "200 400",
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${satoshi.variable} antialiased`}>
      <main>{children}</main>
    </div>
  );
}
