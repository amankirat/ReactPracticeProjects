import React from "react";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <div>
          <Review />
        </div>
      </section>
    </main>
  );
}

export default App;
