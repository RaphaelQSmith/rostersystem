import React from 'react';
import Form from './components/Form'
import Table from './components/Table'
import Navbar from './components/Navbar'
import 'materialize-css/dist/css/materialize.min.css';
import Footer from './components/Footer';
import CreateTable from './components/CreateTable';



function App() {
  return (
    <div>
      <Navbar />
      <Table />
      <CreateTable />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
