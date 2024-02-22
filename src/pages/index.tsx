import React, { useState } from "react";
import axios from "axios";

const Home: React.FC = () => {
  const [contentId, setContentId] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [timeTolerance, setTimeTolerance] = useState("");
  const [serverResponse, setServerResponse] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:3001/create_stamp", {
      objectCid: contentId,
      privateKey,
      timeTolerance,
    });

    setServerResponse(JSON.stringify(response.data, null, 2));
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
        <input
          type="text"
          value={contentId}
          onChange={(e) => setContentId(e.target.value)}
          placeholder="Content ID"
          className="mb-4 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
          placeholder="Private Key"
          className="mb-4 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          value={timeTolerance}
          onChange={(e) => setTimeTolerance(e.target.value)}
          placeholder="Time Tolerance"
          className="mb-4 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <div className="px-4 py-2 rounded-lg bg-gray-100 w-full max-w-lg text-center">
        <pre className="whitespace-pre-wrap">{serverResponse}</pre>
      </div>
    </div>
  );
};

export default Home;
