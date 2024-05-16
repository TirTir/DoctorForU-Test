import { Header, Footer } from "../";

export const Layout = (props) => {
  return (
    <div>
      <Header />
      <main
        style={{
          minHeight: "calc(100vh - 150px)",
        }}
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
