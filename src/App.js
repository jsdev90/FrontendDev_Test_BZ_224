import React, { useState, useEffect } from 'react';

import Modal from './components/Modal';
import WhatGives from './components/WhatGives';
import { Button } from './lib';

const btnStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

function App() {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setTimeout(function() {
      setOpenModal(true);
  }, 1000);
  }, [])
  return (
    <>
      <Button onClick={() => setOpenModal(true)} style={btnStyle}>So what gives?</Button>
      {openModal && <Modal>
        <WhatGives closeModal={() => setOpenModal(false)} />
      </Modal>}
    </>
  );
}

export default App;
