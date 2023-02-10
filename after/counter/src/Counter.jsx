import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div
      class="bg-blue-900 text-white p-5 items-center flex flex-col"
      style={{ width: "200px" }}
    >
      <span className="text-2xl text-red-600">not in React!</span>
      <div>Count = {count()}</div>
      <button onClick={() => setCount(count() + 1)}>Add one</button>
    </div>
  );
};
