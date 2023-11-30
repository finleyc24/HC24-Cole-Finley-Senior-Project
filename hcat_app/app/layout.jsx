// Imports the necessary styles
import "/styles/globals.css";

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
        <link rel="stylesheet" href="/styles/globals.css" />
      </head>
      <body>
        {/* Main container with background image */}
        <div className="main">
          <div className="gradient" />
          {/* Content container */}
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
