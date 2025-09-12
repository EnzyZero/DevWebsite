import { useState, useEffect, type RefObject } from 'react'
import { Code, Layers, GraduationCap, Info } from 'lucide-react'

export default function ProjectRadioButtons({ cardsContainerRef }: { cardsContainerRef: RefObject<HTMLDivElement | null> }) {
  const [selected, setSelected] = useState('all');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelected(event.target.value);
  }

  useEffect(() => {
    if (!cardsContainerRef.current)
    {
      console.warn('cardsContainerRef is null');
      return;
    }

    // iterate through all cards and display them depending on their type
    // except if 'all' is selected -> display all cards
    const projectCards = cardsContainerRef.current.getElementsByClassName('project-card') as HTMLCollectionOf<HTMLDivElement>;
    for (const card of Array.from(projectCards)) {
      
      if (selected === 'all')
      {
        card.style.display = 'block';
        return;
      }

      if (card.classList.contains(selected))
        card.style.display = 'block';
      else
        card.style.display = 'none';
    }

  }, [selected]);

  return (
    <div className="project-radio-buttons">
      <label>
        <input 
          type="radio"
          name="type"
          value="career"
          checked={selected === 'career'}
          onChange={handleChange} 
          />
          <span><Layers color="white" /> career</span>
      </label>
      <label>
        <input 
          type="radio"
          name="type"
          value="education"
          checked={selected === 'education'}
          onChange={handleChange} 
          />
          <span><GraduationCap color="white" /> education</span>
      </label>
      <label>
        <input 
          type="radio"
          name="type"
          value="project"
          checked={selected === 'project'}
          onChange={handleChange} 
          />
          <span><Code color="white" /> projects</span>
      </label>
      <label>
        <input 
          type="radio"
          name="type"
          value="all"
          checked={selected === 'all'}
          onChange={handleChange} 
          />
          <span><Info color="white" /> all</span>
      </label>
    </div>
  );
}