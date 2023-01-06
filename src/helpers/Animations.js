import gsap, { Bounce, Power2, Elastic } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Reviews from '../Data/Reviews';

gsap.registerPlugin(ScrollTrigger);

const tl = new gsap.timeline();

//scroll trigger defaults
const Trigger = (trigger, start) => {
  return {
    trigger: `.${trigger}`,
    start: start || '-800',
    toggleActions: 'play none none reverse',
  };
};
const duration = window.innerWidth > 676 ? 0.6 : 1.2;

//homepage animation
const homeAnimation = () => {
  tl.from('.topImgShell', {
    duration: duration,
    y: 1000,
    opacity: 0.5,
    ease: Power2.easeInOut,
  })
    .from('.topImg', { duration: duration, scale: 1.2, ease: Elastic.easeInOut }, 0.3)
    .from(
      ['.designer', '.topDiscount'],
      { duration: duration, right: 0, ease: Power2.easeInOut },
      0.3
    );
  tl.from(
    '.headingBoldText1',
    {
      duration: duration,
      y: '100%',
      opacity: 0,
      ease: Power2.easeInOut,
    },
    0.6
  )
    .from(
      '.headingBoldText2',
      {
        duration: duration,
        y: '100%',
        opacity: 0,
        ease: Power2.easeInOut,
      },
      0.7
    )
    .from(
      '.headingText',
      {
        duration: duration,
        y: '100%',
        opacity: 0,
        ease: Power2.easeInOut,
      },
      0.9
    )
    .from(
      '.headingButton',
      {
        duration: duration,
        y: '100%',
        opacity: 0,
        ease: Power2.easeInOut,
      },
      1
    );
  if (window.innerWidth > 767) {
    gsap.from(
      '.featured',
      {
        scrollTrigger: Trigger('featured'),
        duration: duration,
        y: '100%',
        opacity: 0,
        ease: Power2.easeInOut,
      },
      1
    );
    gsap.from('.featuredHeadingFragment', {
      scrollTrigger: Trigger('featured'),
      duration: duration,
      y: '100%',
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 0.7,
    });
    gsap.from(['.chairDiscount', '.verseDiscount', '.profile2'], {
      scrollTrigger: Trigger('featured'),
      duration: duration,
      left: 0,
      delay: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.from('.productName', {
      scrollTrigger: Trigger('featured'),
      duration: duration,
      y: '100%',
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 1,
    });
    gsap.from('.productContent', {
      scrollTrigger: Trigger('featured'),
      duration: duration,
      y: '100%',
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 1.2,
    });
    gsap.from('.featuredButton', {
      scrollTrigger: Trigger('featured'),
      duration: duration,
      scale: 0.4,
      x: 100,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 1.2,
    });
    gsap.from('.productField', {
      scrollTrigger: Trigger('productField', '-600'),
      duration: duration,
      y: '100%',
      opacity: 0,
      ease: Power2.easeInOut,
    });
    gsap.from(
      '.shopNav',
      {
        scrollTrigger: Trigger('productField', '-600'),
        duration: duration,
        x: '50%',
        width: 0,
        opacity: 0,
        ease: Power2.easeInOut,
      },
      1
    );
    Array.from(Array(5).keys()).forEach((item, i) => {
      return gsap.from(
        `.product${i + 1}`,
        {
          scrollTrigger: Trigger('productField', '-600'),
          duration: duration,
          width: 0,
          opacity: 0,
          height: 0,
          ease: Power2.easeInOut,
          delay: i * 0.3,
        },
        1
      );
    });
    gsap.from(
      '.more',
      {
        scrollTrigger: Trigger('productField', '-600'),
        duration: duration,
        width: 0,
        opacity: 0,
        height: 0,
        ease: Power2.easeInOut,
        delay: 6 * 0.3,
      },
      1
    );
    gsap.from(
      '.bottomImgShell',
      {
        scrollTrigger: Trigger('bottom', '-500'),
        duration: duration,
        x: '150%',
        opacity: 0,
        ease: Power2.easeInOut,
      },
      1
    );
    gsap.from('.bottom', {
      scrollTrigger: Trigger('bottom', '-500'),
      duration: duration,
      y: '100%',
      opacity: 0,
      ease: Power2.easeInOut,
    });
    gsap.from('.bottomImg', {
      scrollTrigger: Trigger('bottom', '-500'),
      duration: duration,
      scale: 3.9,
      delay: 0.5,
    });
    gsap.from('.bottomHeading', {
      scrollTrigger: Trigger('bottom', '-500'),
      duration: duration,
      y: '100%',
      delay: 1.1,
    });
    gsap.from('.bottomContent', {
      scrollTrigger: Trigger('bottom', '-500'),
      duration: duration,
      opacity: 0,
      y: '100%',
      delay: 1.4,
    });
    gsap.from('.buttomButton', {
      scrollTrigger: Trigger('bottom', '-500'),
      duration: duration,
      x: '-150%',
      delay: 1.5,
    });
    gsap.from('.customerReviews', {
      scrollTrigger: Trigger('customerReviews'),
      duration: duration,
      y: '100%',
      opacity: 0,
      ease: Power2.easeInOut,
    });

    Reviews.forEach((item, i) => {
      return gsap.from(
        `.review${i + 1}`,
        {
          scrollTrigger: Trigger('customerReviews'),
          duration: duration,
          width: 0,
          y: '100%',
          height: 0,
          ease: Power2.easeInOut,
          delay: i * 0.5,
        },
        1
      );
    });
    gsap.from('.commentsSection', {
      scrollTrigger: Trigger('customerReviews'),
      duration: duration,
      x: '150%',
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 2.5,
    });
  }
};

export { homeAnimation };
