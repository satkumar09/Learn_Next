import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>This is header</h1>
        {children}
        <h1>This is footer</h1>
      </body>
    </html>
  );
}
//the layout above remains same, so the children will execute according to the code changes while header and footer will remain at the top and bottom respectively as suggest by the layout

//Example:
//Output(http://localhost:3000/profile):
/*
This is header
This is profile route
This is footer
*/
