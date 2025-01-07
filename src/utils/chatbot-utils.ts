// chatbot-utils.ts
export const sendMessageToChatbot = async (input: string) => {
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
  
      if (!res.ok) {
        throw new Error(`API request failed with status: ${res.status}`);
      }
  
      const data = await res.json();
      return data.text;
    } catch (error) {
      throw new Error("Error sending message to chatbot");
    }
  };
  
  export const scheduleMessage = async (message: string, time: string) => {
    // Logic for scheduling a message
  };
  


// Function to handle introduction
export const introduceChatbot = () => {
    const introduction = `
      Hello, I-Send is a secure, decentralized document-sharing platform that uses blockchain, smart contracts, AI-Driven features, and IPFS (web-3 storage) to ensure privacy, immutability, and transparent tracking of document access and modifications.
  
      Here's what I can do for you:
      - Send and receive secure messages with AI-driven responses.
      - Schedule messages for future delivery.
      - Attach documents to messages, securely stored on IPFS.
      - Track document access and modifications using blockchain.
      - Grant or revoke access to specific documents via smart contracts.
      - Retrieve previous messages or documents from your inbox or archive.
      - Search and filter your messages based on sender, recipient, and time.
      - Integrate with your decentralized web3 address for secure access.
      - Easily manage your documents and communications in a single platform.
    `;
    return `${introduction}`;
  };
  
  
  