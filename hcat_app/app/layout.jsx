// Creates basic layout for the Home Page

import "/styles/globals.css";

export const metadata = {
  title: "Hanover College",
  description: "Find Hanover Emergency Action Plans",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;