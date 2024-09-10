export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-slate-200 bg-[url('https://wallpapersmug.com/download/2560x1440/6d551a/sky-clouds-4k.jpg')] relative">
      <header className="z-10 w-full max-w-5xl items-center justify-between font-mono font-bold lg:flex">
        <h1 className="bg-slate-200 shadow-lg rounded-lg p-2">Element-ary Discussions</h1>
        <p className="bg-slate-200 shadow-lg rounded-lg p-2">A Burgess Production</p>
      </header>

      <article className="max-w-md rounded-lg overflow-hidden shadow-lg rounded-lg bg-slate-200 mt-8 min-w-sm">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Intro to Oxygen</div>
          <p className="text-black text-base">Oxygen is one of the most important elements on the periodic table.</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Oxygen_molecule.png"
            alt="Dioxygen (O2) Molecule"
            className="my-4 w-full h-auto"
          />
          <p className="text-black text-base">
            It is the third most abundant element on the Earth's crust, and we should all be thankful for that! Oxygen
            is the element from the air that we breathe.
          </p>
          <p className="text-black text-base">
            In its typical form, oxygen is a colorless, odorless, and tasteless gas that is absolutely crucial to living
            things. Animals will breathe in oxygen to use inside the body, and expel carbon dioxide. Plants can then use
            the carbon dioxide, and will return the oxygen back into the air.
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/70/Liquid_oxygen_in_a_magnet_2.jpg"
            alt="Liquid oxygen suspended by two magnets"
            className="my-4 w-full h-auto"
          />
          <p className="text-black text-base">
            When cooled below negative 297.3 degrees Fahrenheit, or -182.94 degrees Celcius, oxygen will begin to change
            from a gas to a liquid. As a liquid, oxygen takes on a light sky-blue color, but remains mostly clear. While
            a liquid, oxygen can be held in magnetic suspension by powerful magnets.
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/Launch_of_Friendship_7_-_GPN-2000-000686.jpg"
            alt="The Friendship 7 rocket taking off"
            className="my-4 w-full h-auto"
          />
          <p className="text-black text-base">
            Liquid oxygen is used as the oxidizer for liquid-fueled rockets! The NASA Space Shuttle used liquid oxygen
            as the oxidizer for its main engines, and more recent space craft such as the SpaceX Raptor continue to make
            use of liquid oxygen.
          </p>
          <p className="text-xs p-2">Images from Wikimedia</p>
        </div>
      </article>

      <nav className="hover:bg-gray-100 transition rounded-lg absolute bottom-0 left-0 w-auto h-full">
        <div className="grid text-center lg:w-full lg:max-w-22xl lg:grid-cols-auto lg:text-left">
          <a
            href="/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Main
              <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Back to the hub page.</p>
          </a>

          <a
            href="/week2-page"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Next: Nitrogen
              <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">It's what plants crave!</p>
          </a>

          <a
            href="week3-page"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Soon: Hydrogen
              <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">The other parts of water!.</p>
          </a>

          <a
            href="/week4-page"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Soon: Helium
              <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">It does more than make things float!</p>
          </a>
        </div>
      </nav>

      <footer className="p-4 bg-slate-200 mt-4 rounded-lg">
        <div className="max-w-sm rounded">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Fun Fact:</div>
            <p className="text-gray-700 text-base">Approximately two-thirds of the mass of a human body is oxygen!</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
