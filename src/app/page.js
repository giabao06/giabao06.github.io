import Header from './components/header';
import Project from './components/projects';
import Contact from './components/contact';

export default function Home() {
  return (
    <div className="m-auto grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inconsolata)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Header/>
          <p className={"items-center"}>
              This site is still very WIP. More stuff to come<i>(tm)</i>.</p>
          <Contact/>
      </main>
    </div>
  );
}
