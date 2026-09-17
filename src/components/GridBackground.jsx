import { useEffect, useRef } from 'react';

export default function GridBackground() {
  // Simple static subtle background
  return (
    <div className="bg-subtle fixed inset-0 z-0" aria-hidden />
  );
}