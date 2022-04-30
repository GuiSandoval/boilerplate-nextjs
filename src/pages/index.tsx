import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello Next.js</h1>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        Aumentar
      </button>
    </div>
  );
};

export default Home;
