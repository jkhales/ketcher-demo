import { Editor } from "ketcher-react";
import { StandaloneStructServiceProvider } from "ketcher-standalone";

function App() {
  return (
    <Editor
      staticResourcesUrl={process.env.PUBLIC_URL}
      structServiceProvider={new StandaloneStructServiceProvider()}
      errorHandler={console.error}
    />
  );
}

export default App;
