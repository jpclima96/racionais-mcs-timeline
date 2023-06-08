import { render, Fragment } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";

import releases, { Release as ReleaseType } from "./Data";

import "modern-normalize";
import "./index.css";

const isElementVisible = (element: HTMLElement) => {
  if (!element) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  const width = window.innerWidth || document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;

  return !(
    rect.right < 0 ||
    rect.bottom < 0 ||
    rect.left > width ||
    rect.top > height
  );
};

const useTimeline = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref.current !== null) {
      setIsInView(isElementVisible(ref.current));
    }
    const onScroll = () => {
      if (ref.current) {
        setIsInView(isElementVisible(ref.current));
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  const timelineRef = (node: HTMLDivElement | null) => {
    ref.current = node;
  };

  return { isInView, timelineRef };
};

export const Release = ({
  artist,
  title,
  label,
  description,
  format,
  year,
  listen,
  link
}: ReleaseType) => {
  const { isInView, timelineRef } = useTimeline();

  const inViewClass = isInView ? "in" : "out";

  return (
    <div ref={timelineRef} className="release">
      <Fragment>
        <span className={["release-year", inViewClass].join(" ")}>{year}</span>
        <div className={["release-content", inViewClass].join(" ")}>
          <div className="release-content-line" />
          <h3 className="release-artist">{artist}</h3>
          <h4 className="release-title">{title}</h4>
          <h5 className="release-subtitle">
            {format} - {label}
          </h5>
          <p>{description}</p>
          {link && (
            <a className="link" rel="noreferrer" target="_blank" href={link}>
              link
            </a>
          )}
          {listen && (
            <a className="link" rel="noreferrer" target="_blank" href={listen}>
              Listen
            </a>
          )}
        </div>
      </Fragment>
    </div>
  );
};

const ITEM_GROUP = 25;

export const App = () => {
  const [level, setLevel] = useState(1);

  const incLevel = () => {
    setLevel(level + 1);
  };

  const items = releases.slice(0, ITEM_GROUP * level);
  return (
    <div className="timeline">
      <h1>The J Dilla Timeline</h1>
      <div className="artist-description">
        An incomplete timeline of J Dilla's work.
        <br />
        Includes the artist's own releases under J Dilla as well as production,
        remixes and guest appearances.
        <br />
        The timeline features work under the names J Dilla, Jay Dee, The Ummah
        and his contributions to the Soulquarians.
      </div>
      <div>
        This site is built with{" "}
        <a href="https://preactjs.com/" target="_blank" rel="noreferrer">
          Preact
        </a>{" "}
        and Codesandbox.
      </div>
      <div className={"releases releases-items"}>
        {items.map((release, index) => {
          return <Release {...release} key={index} />;
        })}
      </div>
      {items.length < releases.length ? (
        <div class="coming-soon btn" onClick={incLevel}>
          Load More
        </div>
      ) : (
        <div class="coming-soon">2000 Coming Soon</div>
      )}
    </div>
  );
};

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
