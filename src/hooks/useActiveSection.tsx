import { useState, useEffect } from "react";

const useActiveSection = (sectionIds: string[], isScrolledPastHero: boolean) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.6, // Detecta cuando el 60% de la sección está visible
    };
    const observer = new IntersectionObserver((entries) => {
      // Primero, encuentra todas las secciones aún intersectando
             const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection && isScrolledPastHero) { // Verificamos isScrolledPastHero
          setActiveSection(visibleSection.target.id);
        }
     
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds, isScrolledPastHero]);
  
    // Resetear el estado si todavía no se ha hecho scroll más allá del Hero
  useEffect(() => {
        if (!isScrolledPastHero) {
          setActiveSection(null);
        }
      }, [isScrolledPastHero]);


  return activeSection;
};

export default useActiveSection;
