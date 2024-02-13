// Imports the necessary styles
import "/public/assets/globals.css";

// Defines metadata for the page
export const metadata = {
  title: "Hanover College",
  description: "Find Hanover Emergency Action Plans",
};

// Root layout component
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/public/assets/globals.css" />
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
