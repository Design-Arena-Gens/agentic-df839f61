import Image from "next/image";

const sections = [
  {
    title: "The Ambush",
    paragraphs: [
      "A humid hush blankets the jungle as the traveler threads through tangled vines, every sense attuned to the twilight chorus. Without warning the undergrowth erupts — a tawny blur, raw power unleashed. The lion crashes from the foliage, jaws wide, a furnace of breath and rage. Instinct screams to run, but there is nowhere to go; trees hem him in and the river roars somewhere beyond.",
      "He stumbles back, palms skidding over moss-slick roots. A swipe of the lion’s paw splits the air, shredding the sleeve of his shirt. Pain lances across his forearm. The jungle watches, silent, as predator and prey size each other up under the dimming light.",
    ],
  },
  {
    title: "Finding an Edge",
    paragraphs: [
      "The traveler forces a breath past the panic. He spots a fractured branch jutting from a fallen kopje tree — not a weapon, but leverage. When the lion springs again, he pivots, driving the branch sideways to wedge the beast’s massive head. The wood groans, but it slows the force enough for him to roll away.",
      "He scrambles toward a lattice of strangler figs and thorny acacia, every step a calculation. The lion lunges once more, claws tearing earth. The traveler dives between the roots, using the tight space to shield his sides. He snatches a shard of obsidian-like stone from the forest floor, its edge sharp from centuries of river tumble.",
    ],
  },
  {
    title: "Turning the Tide",
    paragraphs: [
      "When the lion thrusts a paw into the root cage, the traveler slashes upward, carving a red arc across muscle. The beast recoils, roaring thunder that rattles the canopy. Desperation sharpens the traveler’s focus. He hurls soil and leaf mold into the lion’s eyes, buying precious seconds.",
      "He surges forward, aiming for the throat where mane parts over vulnerable flesh. The stone bites deep. The lion thrashes, but the roots hamper its full strength. He clamps his forearm across the muzzle, forcing the jaws shut while driving the shard again and again. Hot breath, the reek of blood, the drumbeat of his own heart — all fuse into a single battle cry.",
    ],
  },
  {
    title: "Against All Expectations",
    paragraphs: [
      "At last the lion slumps, the ferocity draining from its eyes. The traveler collapses beside the fallen titan, chest heaving, every muscle aflame. Above, the jungle exhales; the cicadas resume their serenade as dusk gives way to a star-pricked sky.",
      "He binds his wounds with torn cloth, shoulders the weight of what he has done, and murmurs a promise of respect for the life taken. With trembling resolve he presses onward through the night, forever changed — a living testament to courage, quick thinking, and the unyielding will to survive.",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="hero">
        <div className="hero__overlay" />
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
          alt="Dense jungle at dusk"
          fill
          className="hero__image"
          sizes="100vw"
          priority
        />
        <div className="hero__content">
          <h1>Against All Odds</h1>
          <p>
            Deep within the African jungle, a lone traveler is forced to meet
            fury with ingenuity.
          </p>
        </div>
      </div>
      <section className="story">
        {sections.map((section) => (
          <article key={section.title} className="story__section">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>
    </main>
  );
}

