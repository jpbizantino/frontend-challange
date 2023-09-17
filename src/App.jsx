import React from "react";
import { AppLayout } from "./common/layout/AppLayout.jsx";
import { FileList } from "./file/view/FileList.jsx";
import Container from "react-bootstrap/Container";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <AppLayout>
        <Container>
          <FileList />
        </Container>
      </AppLayout>
    </>
  );
};

export default App;
