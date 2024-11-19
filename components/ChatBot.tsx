'use client'; // Required for client-side components in Next.js 13 app directory

export default function Chatbot() {
  return (
    <div className="w-full" style={{ height: '700px', minHeight: '700px' }}>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/w4vBBVL4MJDGIO3Pi_vTQ"
        width="100%"
        style={{ height: '100%', minHeight: '700px' }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}