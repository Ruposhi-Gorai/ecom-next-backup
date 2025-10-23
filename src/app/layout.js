import MainLayout from "./Component/Common/MainLayout";
import "./globals.css";


export const metadata = {
  title: "Gorai Clothes",
  description: "Jamshedpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <MainLayout>
        {children}
       </MainLayout>
      </body>
    </html>
  );
}
