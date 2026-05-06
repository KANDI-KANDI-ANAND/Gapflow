import GfHero from '../components/GfHero';

export default function Hero() {
  return (
    <GfHero
      variant="launch"
      onPrimaryClick={() => {
        window.open('https://app.gapflow.ai/', '_blank');
      }}
      onSecondaryClick={() => {
        const element = document.getElementById('demo');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }}
    />
  );
}
