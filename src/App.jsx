import ShowData from "./data/fetchData";


function App() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 p-8">
      
      <p>
        VITE_TEST: {" "}
      {import.meta.env.VITE_TEST}
      </p>
      <p>
      VITE_PORT: {" "}
      {import.meta.env.VITE_PORT}
      </p>
<ShowData/>
    </div>
  );
}

export default App;
