import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Button() {

  const notifySuccess = () => toast.success('Success! Everything went well!');
  const notifyError = () => toast.error('Error! Something went wrong!');
  const notifyWarning = () => toast.warning('Warning! Be cautious!');
  const notifyInfo = () => toast.info('Info! Just so you know...');

  return (
    <div>
      <button onClick={notifySuccess}>Success</button>
      <button onClick={notifyError}>Error</button>
      <button onClick={notifyWarning}>Warning</button>
      <button onClick={notifyInfo}>Info</button>
    </div>
  );
}
