import { useEffect } from 'react';

function BodyAttributes() {
  useEffect(() => {
    // Add Grammarly attributes after hydration
    const body = document.body;
    body.setAttribute('data-new-gr-c-s-check-loaded', '14.1235.0');
    body.setAttribute('data-gr-ext-installed', '');
  }, []);

  return null;
} 

BodyAttributes.displayName = 'BodyAttributes';
export default BodyAttributes; 