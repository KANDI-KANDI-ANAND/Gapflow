import GfHero from '../components/GfHero';

export default function Hero() {
  return (
    <GfHero
      variant="launch"
      onPrimaryClick={() => {
        const element = document.getElementById('get-started');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }}
      onSecondaryClick={() => {
        const element = document.getElementById('demo');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }}
    />
  );
}
