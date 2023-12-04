import styled from "@emotion/styled";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  onNext: () => void;
}
const MainInfiniteScroll = ({ children, onNext }: Props) => {
  const detectorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null, // root 는 화면
      rootMargin: "0px",
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onNext();
        }
      });
    };
    if (!detectorRef.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(detectorRef.current);

    // eslint-disable-next-line consistent-return
    return () => {
      if (!detectorRef.current) return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(detectorRef.current);
    };
  }, [onNext]);

  return (
    <Container>
      {children}
      <Detector ref={detectorRef} />
    </Container>
  );
};

const Container = styled.div``;
const Detector = styled.div`
  height: 50px;
  background-color: #18f;
`;

export default MainInfiniteScroll;
