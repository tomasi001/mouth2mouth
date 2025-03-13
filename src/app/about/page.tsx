export default function AboutPage() {
  // Team members data

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="bg-[url('/backgrounds/about-us.png')] bg-cover bg-center h-screen absolute inset-0 z-0" />

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 pt-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left side - "ABOUT US." */}
          <div>
            <h1
              className="text-[60px] uppercase font-sailors tracking-wider"
              style={{ fontFamily: "var(--font-sailors)" }}
            >
              ABOUT US.
            </h1>
          </div>

          {/* Right side - Description */}
          <div>
            <p className=" font-sailors text-[25px] space-y-4">
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
      </div>
    </div>
  );
}
