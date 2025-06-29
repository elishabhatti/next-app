"use client";

import { useEffect, useState } from "react";

const RandomJokes = () => {
  const [joke, setJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const fetchJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(data);
    setShowPunchline(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-white p-6">
      <div className="bg-white border border-yellow-200 rounded-xl shadow-md p-6 w-full max-w-md text-center space-y-4">
        <div className="text-4xl">☕</div>

        <h1 className="text-xl font-semibold text-gray-800">Random Jokes Generator</h1>

        <p className="text-gray-700">
          {joke.setup}
        </p>

        {showPunchline && (
          <p className="text-indigo-600 font-medium">{joke.punchline}</p>
        )}

        <div className="space-y-2">
          {!showPunchline ? (
            <button
              onClick={() => setShowPunchline(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-lg transition"
            >
              Reveal Punchline
            </button>
          ) : null}

          <button
            onClick={fetchJoke}
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-3 py-1 rounded-lg text-sm"
          >
            Next
          </button>
        </div>

        {joke.id && <p className="text-xs text-gray-400">Joke ID: {joke.id}</p>}
      </div>
    </div>
  );
};

export default RandomJokes;
