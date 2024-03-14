import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import ActiveBids from "./pages/ActiveBids";

function App() {
  return (
      <Default>
          <>
            <Layout >
              <ActiveBids />
            </Layout>
          </>
      </Default>
  );
}
export default App;
