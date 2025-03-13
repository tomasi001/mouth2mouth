export default function AboutPage() {
  // Team members data

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="bg-[url('/images/fran/so_bright_it_hurts.png')] bg-cover bg-center h-screen absolute inset-0 z-0" />

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 pt-16">
        {/* Desktop Layout - hidden on mobile */}
        <div className="hidden md:flex flex-row gap-16 items-start">
          {/* Left side - "ABOUT US." */}
          <div>
            <h1
              className="text-[60px] text-[#bac8c4] uppercase font-sailors tracking-wider"
              style={{ fontFamily: "var(--font-sailors)" }}
            >
              ABOUT US.
            </h1>
          </div>

          {/* Right side - Description */}
          <div className="backdrop-blur-md bg-white/30 p-8">
            <p className="font-sailors text-[25px] space-y-4">
              MOUTH2MOUTH is a music and design collective founded in 2017.
              <br />
              Our aim is to create accessible spaces for artists and party-goers
              to
              <br />
              experience unique events at secret locations around the city.
              <br />
              We communicate all new events via email - we believe this makes
              the space
              <br />
              more intentional because everyone there, truly wants to be there.
              <br />
              To find out more - sign-up to our mailing list!
            </p>
          </div>
        </div>

        {/* Mobile Layout - visible only on mobile */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Mobile Header */}
          <div>
            <h1
              className="text-[40px] text-[#bac8c4] uppercase font-sailors tracking-wider"
              style={{ fontFamily: "var(--font-sailors)" }}
            >
              ABOUT US.
            </h1>
          </div>

          {/* Mobile Description */}
          <div className="backdrop-blur-md bg-white/30 p-8">
            <p className="font-sailors text-[18px] leading-relaxed text-[#bac8c4]">
              MOUTH2MOUTH is a music and design collective founded in 2017. Our
              aim is to create accessible spaces for artists and party-goers to
              experience unique events at secret locations around the city. We
              communicate all new events via email - we believe this makes the
              space more intentional because everyone there, truly wants to be
              there. To find out more - sign-up to our mailing list!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
