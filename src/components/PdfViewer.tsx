import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './PdfViewer.module.css';

type Props = {
  /** English PDF path (default locale) */
  src?: string;
  /** Chinese PDF path; used when locale is zh */
  srcZh?: string;
  title?: string;
  height?: number | string;
};

/** Hide navbar / Share / On this page if iframe ends up loading HTML docs. */
function stripDocsChrome(iframe: HTMLIFrameElement): void {
  try {
    const doc = iframe.contentDocument;
    if (!doc?.documentElement) {
      return;
    }

    // Real PDF plugins usually don't expose a Docusaurus DOM tree.
    if (!doc.querySelector('.navbar, .theme-doc-markdown, .docs-wrapper')) {
      return;
    }

    doc.documentElement.classList.add('docs-embed');

    if (!doc.getElementById('pdfviewer-embed-style')) {
      const style = doc.createElement('style');
      style.id = 'pdfviewer-embed-style';
      style.textContent = `
        .navbar, .navbar-sidebar,
        .theme-doc-sidebar-container,
        .theme-doc-toc-desktop, .theme-doc-toc-mobile, .tocCollapsible,
        .breadcrumbsRow, .theme-doc-breadcrumbs,
        .share-button, .share-button--inline,
        .pagination-nav, .theme-doc-footer, .footer {
          display: none !important;
        }
        .main-wrapper, .docs-wrapper, .docMainContainer, article {
          margin: 0 !important;
          padding-top: 0 !important;
          max-width: 100% !important;
        }
      `;
      doc.head.appendChild(style);
    }
  } catch {
    // Cross-origin or PDF plugin — ignore.
  }
}

export default function PdfViewer({
  src = '/docs/whitepaper_en.pdf',
  srcZh = '/docs/whitepaper.pdf',
  title,
  height = 900,
}: Props): React.ReactNode {
  const {i18n} = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh';
  const path = isZh ? srcZh : src;
  const baseSrc = useBaseUrl(path);
  const resolvedSrc = useMemo(
    () => `${baseSrc}#view=FitH`,
    [baseSrc],
  );
  const resolvedTitle =
    title ??
    translate({
      id: 'pdfViewer.defaultTitle',
      message: 'PDF Preview',
      description: 'Default PDF viewer title',
    });

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  // SPA hydration inside iframe can land after first load — re-strip a few times.
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    const run = () => stripDocsChrome(iframe);
    run();
    const t1 = window.setTimeout(run, 300);
    const t2 = window.setTimeout(run, 1000);
    const t3 = window.setTimeout(run, 2500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [resolvedSrc]);

  const toggleFullscreen = useCallback(async () => {
    const el = containerRef.current;
    if (!el) {
      return;
    }

    try {
      if (document.fullscreenElement === el) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen();
      }
    } catch {
      // Browser may block fullscreen without a user gesture or deny the API.
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.wrapper}
      style={isFullscreen ? undefined : {height}}>
      <div className={styles.toolbar}>
        <a
          className={styles.link}
          href={baseSrc}
          target="_blank"
          rel="noreferrer">
          <Translate id="pdfViewer.openNewTab">Open in new tab</Translate>
        </a>
        <a className={styles.link} href={baseSrc} download>
          <Translate id="pdfViewer.download">Download PDF</Translate>
        </a>
        <button
          type="button"
          className={styles.button}
          onClick={toggleFullscreen}
          aria-pressed={isFullscreen}>
          {isFullscreen ? (
            <Translate id="pdfViewer.exitFullscreen">Exit fullscreen</Translate>
          ) : (
            <Translate id="pdfViewer.fullscreen">Fullscreen</Translate>
          )}
        </button>
      </div>

      <iframe
        ref={iframeRef}
        key={resolvedSrc}
        className={styles.frame}
        src={resolvedSrc}
        title={resolvedTitle}
        onLoad={(e) => stripDocsChrome(e.currentTarget)}
      />
    </div>
  );
}
