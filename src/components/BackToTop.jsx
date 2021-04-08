import React, { useCallback, useState } from 'react';
import { useWindowScroll, useThrottledFn } from 'beautiful-react-hooks';
import { ReactComponent as ArrowTop } from '../assets/arrow-top.svg';

const BackToTop = ({ offset = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > offset) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const onClick = useCallback(() => {
    const scrollToTop = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (window && scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
      }
    }
    scrollToTop();
  }, []);

  useWindowScroll(useThrottledFn((event) => {
    onScroll();
  }, 250));

  const className = 'scroll-top' + (isVisible ? ' is-visible' : '')
  return (
    <div className={className} onClick={onClick}>
      <ArrowTop />
    </div>
  )
}

export default BackToTop
