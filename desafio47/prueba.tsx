import React from "react";

export default function App() {
	return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Is it Down?</h1>
      <h2>
        Go{" "}
        <a
          href="https://rapidapi.com/jakash1997/api/website-data-gathering-and-update-tracking"
          target="_blank"
        >
          here
        </a>{" "}
        to get an API key
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      	
	<br />
	
	<code>{JSON.stringify(response, null, 2)}</code>
    </div>
  );
}