// External libraries
import React, { useState } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// External components
import { Stack, Form } from 'react-bootstrap';

// Internal Components
import BandForm from "./components/BandForm";

// JSON input
import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

// App implementation
function App() {

  const [bandIndex, setBandIndex] = useState(0);

  const bands = [skaBand, kpopBand, punkBand];
  const onSelectBand = (e: any) => {
    setBandIndex(e.target.value);
  }

  return (
    <Stack gap={2} className="col-md-10 mx-auto">
      <h2>Select a band</h2>
      <Form.Select onChange={onSelectBand}>
        <option value="0">Ska Band</option>
        <option value="1">K-Pop Band</option>
        <option value="2">Punk Band</option>
      </Form.Select>
      <hr className="divider"/>
      <BandForm band={bands[bandIndex]} />
    </Stack>
  );
}

export default App;
