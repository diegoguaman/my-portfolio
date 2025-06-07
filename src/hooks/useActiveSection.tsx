import { useState, useEffect } from "react";

const useActiveSection = (sectionIds: string[], isScrolledPastHero: boolean) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${document.querySelector("header")?.clientHeight ?? 0}px 0px 0px 0px`,
      threshold: [0.6], // Detecta cuando el 60% de la sección está visible
    };
    const observer = new IntersectionObserver((entries) => {
      // Primero, encuentra todas las secciones aún intersectando
      const intersecting = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      
      if (intersecting.length > 0 && isScrolledPastHero) {
        setActiveSection(intersecting[0].target.id);
      } else if (!isScrolledPastHero) {
        // Si volvemos al Hero, limpiamos
        setActiveSection(null);
      } else if (intersecting.length === 0) {
        // Si ninguna sección está visible (por scroll intermedio), limpiamos
        setActiveSection(null);
      }     
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds, isScrolledPastHero]);
  
  return activeSection;
};

export default useActiveSection;
