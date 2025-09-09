import Image from "next/image";

export default function Home() {
  return (
    <body className="bg-white-50">
      <div className="p-4">
        <header className="py-4">
          <div className="mx-auto max-w-7xl bg-[#FFD6FF] px-4 py-3 sm:px-6 lg:px-8">
            <nav className="relative z-50 flex justify-between">
              <div className="flex items-center md:gap-x-12">
                <div className="hidden md:flex md:gap-x- font-normal">
                  <a className="inline-block px-2 py-1 text-sm text-black underline hover:underline-offset-2 hover:bg-[#C8B6FF] hover:rounded-full" href="#features">Projects</a>
                  <a className="inline-block px-2 py-1 text-sm text-black underline hover:underline-offset-2 hover:bg-[#C8B6FF] hover:rounded-full" href="#testimonials">Academic Work</a>
                  <a className="inline-block px-2 py-1 text-sm text-black underline hover:underline-offset-2 hover:bg-[#C8B6FF] hover:rounded-full" href="#pricing">Blog</a>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <img className="w-150 h-auto mx-auto my-auto py-5 rounded-full" alt="FFXIV " src="https://assets.tomestone.gg/media/95242/83c91e15-d705-4da3-97de-da74ef14145a.webp?v=1735198269&quot"/>
        <p className="font-mono">Q&#39;zali Jihn@Crystal Goblin&#39;s Portfolio Page</p>
        <ol className="list-disc">
          <li>Data Science projects</li>
          <li>Web Dev Projects</li>
          <li>AI/ML Work</li>
        </ol>
        <div className="flex flex-row gap-8 py-5">
          <button type="button" className="text-white bg-[#C8B6FF] hover:bg-[#FFD6FF] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#C8B6FF] dark:hover:bg-[#FFD6FF] dark:focus:ring-blue-800">Current Projects</button>
          <button type="button" className="text-white bg-[#C8B6FF] hover:bg-[#FFD6FF] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#C8B6FF] dark:hover:bg-[#FFD6FF] dark:focus:ring-blue-800">Completed Projects</button>
        </div>
      </div>
    </body>
  );
}
