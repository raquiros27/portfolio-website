"use client";

// Dense tiny "distant" stars for depth (encoded SVG)
const distantStarsDataUrl = `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='d' x='0' y='0' width='200' height='200' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='3' cy='12' r='0.15' fill='white' opacity='0.2'/%3E%3Ccircle cx='28' cy='91' r='0.12' fill='white' opacity='0.15'/%3E%3Ccircle cx='77' cy='44' r='0.18' fill='white' opacity='0.25'/%3E%3Ccircle cx='112' cy='7' r='0.1' fill='white' opacity='0.12'/%3E%3Ccircle cx='156' cy='133' r='0.14' fill='white' opacity='0.18'/%3E%3Ccircle cx='19' cy='167' r='0.11' fill='white' opacity='0.22'/%3E%3Ccircle cx='93' cy='188' r='0.16' fill='white' opacity='0.2'/%3E%3Ccircle cx='141' cy='56' r='0.13' fill='white' opacity='0.16'/%3E%3Ccircle cx='45' cy='31' r='0.17' fill='white' opacity='0.24'/%3E%3Ccircle cx='178' cy='99' r='0.12' fill='white' opacity='0.14'/%3E%3Ccircle cx='61' cy='122' r='0.15' fill='white' opacity='0.19'/%3E%3Ccircle cx='134' cy='178' r='0.1' fill='white' opacity='0.11'/%3E%3Ccircle cx='8' cy='67' r='0.14' fill='white' opacity='0.21'/%3E%3Ccircle cx='102' cy='19' r='0.16' fill='white' opacity='0.23'/%3E%3Ccircle cx='167' cy='145' r='0.12' fill='white' opacity='0.17'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23d)'/%3E%3C/svg%3E")`;

export default function BackgroundCanvas() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: -25 }}
    >
      {/* Deep space base + vignette */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#060a14",
          backgroundImage: `
            radial-gradient(ellipse 120% 100% at 50% 0%, rgba(15, 22, 41, 0.5) 0%, transparent 55%),
            radial-gradient(ellipse 100% 80% at 50% 100%, rgba(10, 18, 35, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 80% 120% at 20% 50%, rgba(8, 14, 28, 0.35) 0%, transparent 45%),
            radial-gradient(ellipse 80% 120% at 80% 50%, rgba(8, 14, 28, 0.35) 0%, transparent 45%)
          `,
        }}
      />
      {/* Distant star layer - very fine, lots of them */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: distantStarsDataUrl,
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      />
      {/* Main star layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='stars' x='0' y='0' width='300' height='300' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='12' cy='18' r='0.48' fill='white' opacity='1'/%3E%3Ccircle cx='51' cy='8' r='0.34' fill='white' opacity='0.48'/%3E%3Ccircle cx='100' cy='27' r='0.6' fill='white' opacity='0.95'/%3E%3Ccircle cx='138' cy='12' r='0.26' fill='white' opacity='0.38'/%3E%3Ccircle cx='23' cy='68' r='0.4' fill='white' opacity='0.78'/%3E%3Ccircle cx='87' cy='57' r='0.3' fill='white' opacity='0.55'/%3E%3Ccircle cx='125' cy='78' r='0.52' fill='white' opacity='0.9'/%3E%3Ccircle cx='41' cy='100' r='0.22' fill='white' opacity='0.28'/%3E%3Ccircle cx='107' cy='111' r='0.44' fill='white' opacity='0.85'/%3E%3Ccircle cx='144' cy='134' r='0.36' fill='white' opacity='0.68'/%3E%3Ccircle cx='63' cy='35' r='0.56' fill='white' opacity='0.92'/%3E%3Ccircle cx='114' cy='47' r='0.26' fill='white' opacity='0.38'/%3E%3Ccircle cx='29' cy='129' r='0.4' fill='white' opacity='0.78'/%3E%3Ccircle cx='81' cy='143' r='0.34' fill='white' opacity='0.48'/%3E%3Ccircle cx='132' cy='96' r='0.48' fill='white' opacity='1'/%3E%3Ccircle cx='47' cy='42' r='0.22' fill='white' opacity='0.28'/%3E%3Ccircle cx='74' cy='63' r='0.44' fill='white' opacity='0.85'/%3E%3Ccircle cx='131' cy='114' r='0.3' fill='white' opacity='0.55'/%3E%3Ccircle cx='54' cy='5' r='0.26' fill='white' opacity='0.38'/%3E%3Ccircle cx='143' cy='38' r='0.52' fill='white' opacity='0.9'/%3E%3Ccircle cx='11' cy='51' r='0.34' fill='white' opacity='0.48'/%3E%3Ccircle cx='73' cy='21' r='0.4' fill='white' opacity='0.78'/%3E%3Ccircle cx='130' cy='65' r='0.36' fill='white' opacity='0.68'/%3E%3Ccircle cx='35' cy='89' r='0.48' fill='white' opacity='1'/%3E%3Ccircle cx='92' cy='102' r='0.26' fill='white' opacity='0.38'/%3E%3Ccircle cx='148' cy='123' r='0.44' fill='white' opacity='0.85'/%3E%3Ccircle cx='18' cy='145' r='0.3' fill='white' opacity='0.55'/%3E%3Ccircle cx='66' cy='156' r='0.4' fill='white' opacity='0.78'/%3E%3Ccircle cx='119' cy='168' r='0.34' fill='white' opacity='0.48'/%3E%3Ccircle cx='42' cy='178' r='0.52' fill='white' opacity='0.9'/%3E%3Ccircle cx='95' cy='189' r='0.22' fill='white' opacity='0.28'/%3E%3Ccircle cx='137' cy='201' r='0.44' fill='white' opacity='0.85'/%3E%3Ccircle cx='26' cy='212' r='0.36' fill='white' opacity='0.68'/%3E%3Ccircle cx='78' cy='224' r='0.48' fill='white' opacity='1'/%3E%3Ccircle cx='125' cy='236' r='0.3' fill='white' opacity='0.55'/%3E%3Ccircle cx='159' cy='17' r='0.26' fill='white' opacity='0.38'/%3E%3Ccircle cx='177' cy='58' r='0.56' fill='white' opacity='0.92'/%3E%3Ccircle cx='10' cy='72' r='0.34' fill='white' opacity='0.48'/%3E%3Ccircle cx='66' cy='84' r='0.4' fill='white' opacity='0.78'/%3E%3Ccircle cx='118' cy='97' r='0.44' fill='white' opacity='0.85'/%3E%3Ccircle cx='155' cy='109' r='0.22' fill='white' opacity='0.28'/%3E%3Ccircle cx='33' cy='121' r='0.48' fill='white' opacity='1'/%3E%3Ccircle cx='89' cy='133' r='0.36' fill='white' opacity='0.68'/%3E%3Ccircle cx='142' cy='145' r='0.52' fill='white' opacity='0.9'/%3E%3Ccircle cx='21' cy='157' r='0.26' fill='white' opacity='0.38'/%3E%3Ccircle cx='71' cy='169' r='0.4' fill='white' opacity='0.78'/%3E%3Ccircle cx='128' cy='181' r='0.34' fill='white' opacity='0.48'/%3E%3Ccircle cx='48' cy='193' r='0.44' fill='white' opacity='0.85'/%3E%3Ccircle cx='103' cy='205' r='0.48' fill='white' opacity='1'/%3E%3Ccircle cx='151' cy='217' r='0.3' fill='white' opacity='0.55'/%3E%3Ccircle cx='37' cy='229' r='0.36' fill='white' opacity='0.68'/%3E%3Ccircle cx='85' cy='241' r='0.52' fill='white' opacity='0.9'/%3E%3Ccircle cx='134' cy='253' r='0.22' fill='white' opacity='0.28'/%3E%3Ccircle cx='59' cy='265' r='0.44' fill='white' opacity='0.85'/%3E%3Ccircle cx='112' cy='277' r='0.34' fill='white' opacity='0.48'/%3E%3Ccircle cx='163' cy='289' r='0.48' fill='white' opacity='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23stars)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "800px 800px",
        }}
      />
      {/* background.png at 40% opacity - provides the colours, scrolls with page */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/background.png")',
          opacity: 0.4,
          transform: "scaleX(-1)",
        }}
      />
    </div>
  );
}

