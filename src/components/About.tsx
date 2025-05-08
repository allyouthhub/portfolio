
import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));
    
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950" ref={sectionRef}>
      <div className="section-padding">
        <div className="mb-12 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-lg">Your Photo</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 reveal" style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate creative professional dedicated to crafting exceptional digital experiences. 
              With a background in design and development, I bring a unique perspective to every project.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl. 
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="p-6 card-hover">
                <h4 className="text-lg font-semibold mb-2">Experience</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Over 5 years of professional experience working with clients across various industries.
                </p>
              </Card>
              
              <Card className="p-6 card-hover">
                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor's degree in Design with a minor in Computer Science.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
