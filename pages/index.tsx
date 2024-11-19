import Head from "next/head";
import ChatBot from "../components/ChatBot";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      <Head>
        <title>IKEA Chat Assistant</title>
        <meta name="description" content="IKEA-themed chatbot interface" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-ikeaBlue text-white pl-12 pr-8 flex items-center shadow-lg">
        <Image
          src="/logo.png"
          alt="IKEA Logo"
          width={96}
          height={48}
          className="h-4 w-auto mr-4"
        />
        <h1 className="text-xl font-bold text-ikeaYellow">IKEA Chat Assistant</h1>
      </header>

      {/* Main Chatbot Section */}
      <main className="flex-1 flex justify-center items-center p-6 pb-10">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-ikeaBlue text-3xl font-semibold text-center mb-6">
            Welcome to IKEA&apos;s Chat Assistant!
          </h2>
          <p className="text-gray-700 text-center mb-8 leading-relaxed">
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
      `}</style>
    </div>
  );
}

