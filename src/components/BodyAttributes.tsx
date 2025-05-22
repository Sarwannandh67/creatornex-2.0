'use client';

import { useEffect } from 'react';

export default function BodyAttributes() {
  useEffect(() => {
    // Add Grammarly attributes after hydration
    const body = document.body;
    body.setAttribute('data-new-gr-c-s-check-loaded', '14.1235.0');
    body.setAttribute('data-gr-ext-installed', '');
  }, []);

  return null;
} 