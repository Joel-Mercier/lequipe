import React, { useCallback } from 'react';
import LazyLoad from 'react-lazyload';
import { useController, Parallax } from 'react-scroll-parallax';

const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : children;

const Image = ({x = undefined, y = undefined, src, alt, style, className, tagOuter = "figure", figcaption, parallaxContainerClassName, figcaptionClassName, lazyLoadWrapperClassName}) => {
  const { parallaxController } = useController();
  const handleLoad = useCallback(() => {
    console.log('handleLoad')
    parallaxController.update();
  }, [parallaxController]);
  return (
    <ConditionalWrapper
      condition={y || x}
      wrapper={children => <Parallax y={y} x={x} tagOuter={tagOuter} className={parallaxContainerClassName}>{children}</Parallax>}
    >
      <LazyLoad once offset={500} className={lazyLoadWrapperClassName}>
        <img src={src} alt={alt} className={className} onLoad={handleLoad} style={style}/>
      </LazyLoad>
      {figcaption &&
        <figcaption className={figcaptionClassName}>{figcaption}</figcaption>
      }
    </ConditionalWrapper>
  );
};

export default Image;