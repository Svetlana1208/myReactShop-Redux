import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
  return (
    <Spinner className="position-absolute top-50 start-50 translate-middle" animation="border" variant="primary" size="big" />
  );
}