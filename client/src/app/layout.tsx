import NavBarComponent from "@/components/navbar/NavBarComponent";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="w-screen h-screen flex flex-col">
        <NavBarComponent />
        <div className="w-full h-full overflow-hidden">
          <div className="w-full h-full overflow-auto flex flex-col justify-between">
            <div className="w-full h-fit min-h-full">{children}</div>
            <FooterComponent />
          </div>
        </div>
      </body>
    </html>
  );
}
