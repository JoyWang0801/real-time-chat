import Link from 'next/link';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col text">
    <h1 className="head_text text-center text-white">
      Chat & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">Discover new world with new friends</span>
    </h1>
    <p className="desc text-center">
      Lose eyes get fat shew. Winter can indeed letter oppose way change
      tended now. So is improve my charmed picture exposed adapted demands.
      Received had end produced prepared diverted strictly off man branched.
      Known ye money so large decay voice there to. Preserved be mr cordially
      incommode as an. He doors quick child an point at. Had share vexed front
      least style off why him.
    </p>
    <div>
    <Link href="/chat" className="black_btn mt-5">
    Get Started
    </Link>
    </div>
  </section>
  );
}
