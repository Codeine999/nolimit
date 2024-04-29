export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
          
        },
      },
    };
  };

  export const leftside = (delay) => {
    return {
      hidden: {
        x: -50, 
      },
      show: {
        x: 0, 
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          delay: delay,
        },
      },
    };
  };

  export const rightside = (delay) => {
    return {
      hidden: {
        x: 20, 
      },
      show: {
        x: 0, 
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          delay: delay,
        },
      },
    };
  };

  export const fadeIn = (delay) => {
    return {
      hidden: {
        opacity: 0, 
        y: 40, 
      },
      show: {
        opacity: 1, 
        y: 0, 
        transition: {
          type: "spring",
          duration: 1.5,
          delay: delay,
        },
      },
    };
  };
  
  export const headerside = (delay) => {
    return {
      hidden: {
        x: 50, 
      },
      show: {
        x: 0, 
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          delay: delay,
        },
      },
    };
  };

  export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }
