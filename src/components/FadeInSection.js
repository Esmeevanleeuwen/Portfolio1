import React from "react";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef(null);  // Initialize the ref to null

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    const currentRef = domRef.current;

    if (currentRef) {  // Ensure domRef.current exists before observing
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {  // Ensure domRef.current exists before unobserving
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
