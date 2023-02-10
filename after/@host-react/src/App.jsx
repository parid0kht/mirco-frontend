import React, { useRef, useEffect, useState, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import counterWrapper from "remote/counterWrapper";
import Header from "remoteHeader/Header";
import Footer from "remoteFooter/Footer";
import Button from "remoteButton/Button";
import Input from "remoteInput/Input";

import "./index.scss";

const LazyList = lazy(() => import("remoteList/List"));

const App = () => {
  const [showList, setShowList] = useState(false);
  const [input, setInput] = useState();
  const [postId, setPostId] = useState();
  const divRef = useRef(null);

  useEffect(() => {
    counterWrapper(divRef.current);
  }, []);

  const onClickDisplay = () => {
    setShowList(true);
    setPostId(input);
  };

  console.log("postID", postId);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div>
        <div ref={divRef}></div>
        <div className="flex flex-row items-start">
          <Input value={input} onChange={setInput} />
          <Button onClick={onClickDisplay} />
        </div>
        <Suspense fallback={<div>loading...</div>}>
          {showList && <LazyList postId={postId} />}
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
