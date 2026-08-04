import React, {useEffect, type ReactNode} from 'react';

/**
 * When the docs site is loaded inside an iframe (e.g. PdfViewer SPA fallback),
 * mark <html> so chrome (navbar / share / TOC) can be hidden.
 */
export default function Root({children}: {children: ReactNode}): ReactNode {
  useEffect(() => {
    try {
      if (window.self !== window.top) {
        document.documentElement.classList.add('docs-embed');
      }
    } catch {
      // cross-origin parent: still treat as embed
      document.documentElement.classList.add('docs-embed');
    }
  }, []);

  return children;
}
