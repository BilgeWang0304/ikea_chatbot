import Head from "next/head";
import ChatBot from "../components/ChatBot";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 font-poppins">
      <Head>
        <title>IKEA Chat Assistant</title>
        <meta name="description" content="IKEA-themed chatbot interface" />
        <link rel="icon" href="/favicon.ico" />
        {/* Import Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <header className="bg-ikeaBlue text-white flex items-center shadow-lg px-6">
        <div className="container mx-auto flex items-center py-4 px-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="IKEA Logo"
              width={72}
              height={48}
              className="h-12 w-auto"
            />
            <h1 className="text-2xl font-bold text-ikeaYellow tracking-wide">
              IKEA Chat Assistant
            </h1>
          </div>
        </div>
      </header>

      {/* Main Chatbot Section */}
      <main className="flex-1 flex justify-center items-center p-6 pb-10">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-ikeaBlue text-3xl font-semibold text-left mb-6 pl-6">
            Welcome to IKEA&apos;s Chat Assistant!
          </h2>
          <p className="text-gray-700 text-left mb-8 pl-6 leading-relaxed">
            Ask anything about our products, services, or stores, and we’re here to help!
          </p>

          {/* Chatbot Embed with Border */}
          <div
            className="overflow-hidden rounded-lg border-4 border-ikeaBlue shadow-md"
            style={{
              height: "600px",
              minHeight: "600px",
              padding: "3rem",
              backgroundColor: "#f9f9f9",
            }}
          >
            <ChatBot />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-ikeaYellow text-ikeaBlue pt-4 text-center shadow-inner">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} IKEA. All Rights Reserved.
        </p>
      </footer>

      {/* Tailwind Custom Styles */}
      <style jsx global>{`
        :root {
          --ikeaBlue: #0058a3;
          --ikeaYellow: #ffcc00;
        }
        .bg-ikeaBlue {
          background-color: var(--ikeaBlue);
        }
        .text-ikeaBlue {
          color: var(--ikeaBlue);
        }
        .bg-ikeaYellow {
          background-color: var(--ikeaYellow);
        }
        .text-ikeaYellow {
          color: var(--ikeaYellow);
        }

        /* Import Poppins font globally */
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}

