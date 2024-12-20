import Link from 'next/link';
import Image from 'next/image';
import picFernschicht from '../app/assets/fernschicht.de.webp';
import picTobischmid from '../app/assets/website-portfolio.webp';
import picHerzensstark from '../app/assets/herzensstark-life.webp';
import ScrambleText from './_components/ScrambleText';
import Navbar from './_components/Navbar';

const stack1 = [
  'Next.js',
  'React',
  'HTML5',
  'CSS',
  'Bootstrap 5',
  'TailwindCSS',
  'RadixUI',
  'Breakdance',
  'NPM',
];

const stack2 = [
  'DaisyUI',
  'Javascript',
  'Typescript',
  'Git',
  'Github',
  'Command Line',
  'ChakraUI',
  'Plausible',
  'Datagrip',
];

const stack3 = [
  'MySQL (basic)',
  'Supertokens',
  'Vercel',
  'Sentry',
  'Resend',
  'Google Analytics',
  'PHP (basics)',
  'Stripe',
];

export default function Home() {
  return (
    <div className="px-5 md:p-0 bg-gradient-to-tl from-black to-gray-900 relative overflow-hidden bg-grid-squares">
      {/* light top */}
      <div className="absolute w-[1000px] h-[1500px] -top-[730px] sm:w-[1440px] sm:h-[1440px] max-w-full sm:-top-[1200px] left-1/2 rounded-[50%] opacity-20 -translate-x-1/2 bg-sky-300 select-none pointer-events-none blur-[250px] transform-gpu z-50" />
      {/* middle left */}
      <div className="absolute w-[800px] h-[1000px] top-1/2 -left-[1100px] sm:w-[1440px] sm:h-[1440px] max-w-full -translate-y-1/2 rounded-[50%] opacity-20 bg-sky-300 select-none pointer-events-none blur-[250px] transform-gpu z-50" />
      {/* light bottom */}
      <div className="absolute w-[1000px] sm:w-[1440px] h-[1500px] sm:h-[1440px] -bottom-[730px] max-w-full sm:-bottom-[1200px] left-1/2 rounded-[50%] opacity-20 -translate-x-1/2 bg-sky-300 select-none pointer-events-none blur-[250px] transform-gpu z-50" />

      <div className="mt-4">
        <Navbar />
      </div>
      {/* sections */}
      <section
        id="welcome"
        className="z-20 mb-32 sm:mb-0 mt-24 sm:-mt-10 relative flex flex-col sm:w-screen sm:h-screen justify-center items-center  bg-opacity-95"
      >
        <p className="mb-8 text-xl text-gray-400"> &#128075; Willkommen</p>
        <h1 className="mb-8 text-center md:text-start text-4xl md:text-7xl font-bold mx-auto md:pl-10 h-[80px] md:h-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-slate-600 to-white">
            Hi, ich bin{' '}
            <span className="md:hidden">
              <br />
            </span>
          </span>
          <span className="inline md:inline-block w-[540px] bg-clip-text text-transparent bg-gradient-to-br from-sky-200  via-sky-500 to-sky-900">
            <ScrambleText text="Tobias Schmid" duration={3000} />
          </span>
        </h1>
        <h2 className="sr-only">
          Dein Freelancer (Freiberufler) für Webdesign, Webentwicklung und
          Suchmaschinenoptimierung (SEO) aus Zirndorf bei Oberasbach.
        </h2>
        <p className="text-xl text-gray-400 sm:w-[90%] md:w-[45%] text-center">
          Softwareentwickler aus Zirndorf bei Nürnberg, spezialisiert auf
          Frontend-Entwicklung und Webdesign. Mit Leidenschaft entwickle ich
          elegante Lösungen für komplexe Probleme und biete zugleich
          IT-Unterstützung für kleine Unternehmen an.
        </p>
        <div className="flex gap-4 mt-8">
          <Link
            href="https://www.tobischmid.com/contact/"
            aria-label="contact freelancer Tobias Schmid"
          >
            <button className="px-4 py-3 font-bold text-slate-300 rounded-2xl border border-1 border-sky-800 hover:scale-105 transition-all bg-gradient-to-tr from-sky-600 via-sky-700 to-sky-800">
              Get in touch
            </button>
          </Link>
          <Link
            href="https://www.tobischmid.com/wp-content/uploads/2024/08/CV-Tobias-Schmid.pdf"
            target="_blank"
            aria-label="CV Tobias Schmid"
          >
            <button className="px-4 py-3 text-sky-600 font-bold rounded-2xl border border-1 border-solid border-sky-500 bg-sky-800 bg-opacity-10 hover:scale-105 transition-all">
              Download CV
            </button>
          </Link>
        </div>
        <div className="flex mt-10 gap-5 justify-center">
          {/* github */}
          <Link
            href="https://github.com/tobiholic"
            target="_blank"
            aria-label="go to Tobias Schmid github profile"
          >
            <svg
              width="29px"
              height="29px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="stroke-slate-400 hover:stroke-sky-800  hover:scale-110"
            >
              <path
                strokeWidth="12"
                d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
              />
            </svg>
          </Link>
          {/* linkedin */}
          <Link
            href="https://www.linkedin.com/in/tobischmid/"
            target="_blank"
            aria-label="go to Tobias Schmid linkedin profile"
          >
            <svg
              fill="#94a3b8"
              height="25px"
              width="25px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 45.959 45.959"
              className="stroke-slate-400 hover:stroke-sky-800 hover:fill-sky-800 hover:scale-110"
            >
              <g>
                <g>
                  <path
                    d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489
			c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733
			C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123
			C8.729,6.477,8.416,7.256,7.847,7.811z"
                  />
                  <path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z" />
                  <path
                    d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711
			c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67
			C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797
			c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473
			c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"
                  />
                </g>
              </g>
            </svg>
          </Link>
          <Link href="mailto:keep-it-simple@tobischmid.com?subject=Tobi, I have a question...">
            {/* email */}
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="send email to Tobias Schmid"
              className=" stroke-slate-400 hover:stroke-sky-800 hover:scale-110 fill-slate-400 hover:fill-sky-800"
            >
              <path
                strokeWidth="1"
                d="M1023.46 232a31.629 31.629 0 0 0-2.48-18.271C1012.917 178.288 987.3 160 944.005 160h-832c-38.08 0-79.105 14-99.28 41.472-1.745 1.328-3.409 2.832-4.912 4.576-6.449 7.44-8.705 17.009-7.264 26.033-.288 2.592-.544 5.2-.544 7.92v512c0 53.024 58.992 112 112 112h832c53.024 0 80-58.976 80-112v-512c0-2.832-.368-5.313-.544-8.001zm-911.459-8l832.001-.001h.432L512.002 568.655 81.314 225.407C91.106 223.599 103.154 224 112 224zm832.001 575.999H112.003c-17.648 0-48-30.336-48-48V293.551l427.04 341.648c6.016 5.2 13.487 7.792 20.959 7.792a32.046 32.046 0 0 0 20.976-7.792l427.024-341.632v458.432c0 17.664 1.664 48-16 48z"
              />
            </svg>
          </Link>
        </div>
        <div className="md:absolute mt-16 md:mt-0 bottom-1 animate-bounce flex flex-col gap-3 place-items-center">
          <p className="text-slate-400 text-sm">scroll to explore</p>
          <svg
            width="23px"
            height="23px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-sky-800  fill-sky-800 hover:scale-110"
          >
            <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
          </svg>
        </div>
      </section>
      {/* stack */}
      <section
        id="stack"
        className="z-20 flex flex-col mb-32 md:mb-0 md:w-screen md:h-screen justify-center items-center"
      >
        <p className="mb-8 text-xl text-gray-400"> &#128195; The stack</p>
        <h2 className="mb-8 text-center text-4xl md:text-7xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-slate-700 to-white">
            Lernen und
          </span>
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 via-sky-500 to-purple-950">
            {' '}
            Entwickeln
          </span>
        </h2>

        <div className="p-5 rounded-2xl shadow-sm shadow-sky-800 flex relative flex-col gap-4 overflow-hidden mb-10 items-center w-full max-w-screen-md bg-transparent">
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#0A0F19] to-transparent pointer-events-none z-10" />
          <div className="relative flex gap-3 animate-flowRight">
            {stack1.map((skill, index) => (
              <button
                key={index}
                className="px-2 md:px-4 py-2 md:py-2 text-sm md:text-md text-gray-300 shadow-sm shadow-slate-600 rounded-lg border border-1 border-slate-800 bg-gradient-to-tr from-slate-600 via-slate-950 to-slate-800 whitespace-nowrap"
              >
                {skill}
              </button>
            ))}
          </div>
          <div className="flex gap-3 animate-flowLeft">
            {stack2.map((skill, index) => (
              <button
                key={index}
                className="px-2 md:px-4 py-2 md:py-2 text-sm md:text-md text-gray-300 shadow-sm shadow-slate-600 rounded-lg border border-1 border-slate-800 bg-gradient-to-tr from-slate-600 via-slate-950 to-slate-800 whitespace-nowrap"
              >
                {skill}
              </button>
            ))}
          </div>
          <div className="flex gap-3 animate-flowRight">
            {stack3.map((skill, index) => (
              <button
                key={index}
                className="px-2 md:px-4 py-2 md:py-2 text-sm md:text-md text-gray-300 shadow-sm shadow-slate-600 rounded-lg border border-1 border-slate-800 bg-gradient-to-tr from-slate-600 via-slate-950 to-slate-800 whitespace-nowrap"
              >
                {skill}
              </button>
            ))}
          </div>
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#0A0F19] to-transparent pointer-events-none z-10" />
        </div>
        <p className="text-xl text-gray-400 sm:w-[90%] md:w-[45%] text-center">
          Meine Reise begann einfach – mit der Erstellung einer Website für das
          Unternehmen eines Freundes. Dieses Projekt war der Startschuss für
          meine Entwicklerkarriere.
        </p>
      </section>
      {/* portfolio */}
      <section
        id="portfolio"
        className="z-20 pb-8 flex mb-32 md:mb-0 flex-col md:w-screen md:h-screenjustify-center items-center"
      >
        <p className="mb-8 text-xl text-gray-400"> &#127773; Portfolio</p>
        <h3 className="mb-8 text-center text-4xl md:text-7xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-slate-700 to-white">
            Qualität und
          </span>
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 via-sky-500 to-sky-950">
            {' '}
            Beziehung
          </span>
        </h3>
        <div className="flex flex-wrap gap-5 p-5 mb-10">
          {/* card1 */}
          <div className="relative w-[330px] hover:scale-[102%] transition-all text-slate-400 border border-1 rounded-xl border-black shadow-sm shadow-sky-800">
            <Link
              href="https://fernschicht.de"
              target="_blank"
              aria-label="go to fernschicht.de"
              className="absolute w-full h-full top-0 right-0 z-10"
            />
            <div className="w-full">
              <Image
                src={picFernschicht}
                alt="fernschicht.de"
                width={330}
                height={100}
                className="rounded-t-xl"
              />
            </div>
            <div className="p-3 bg-gradient-to-tr from-gray-900 via-gray-950 to-transparent rounded-b-lg">
              <Link
                href="https://fernschicht.de"
                target="_blank"
                aria-label="go to fernschicht.de"
                className="z-20"
              >
                <h4 className="text-xl mb-3 underline underline-offset-4 decoration-sky-950 hover:decoration-sky-800">
                  fernschicht.de
                </h4>
              </Link>
              <p className="mb-5">
                Eine next.js App für virtuelle Assistenten:innen aus Deutschland
                und zugleich meine erste Full-Stack Erfahrung.
                <br />
              </p>
              <p className="text-sm">
                #Nextjs #Typescript #React #MySQL #Datagrip
              </p>
            </div>
          </div>
          {/* card2 */}
          <div className="relative w-[330px] hover:scale-[102%] transition-all text-slate-400 border border-1 rounded-xl border-black shadow-sm shadow-sky-800 ">
            <Link
              href="https://tobischmid.com"
              target="_blank"
              className="absolute w-full h-full top-0 right-0 z-10"
              aria-label="go to tobischmid.com"
            />
            <div className="w-full">
              <Image
                src={picTobischmid}
                alt="tobischmid.com"
                width={330}
                height={100}
                className="rounded-t-xl"
              />
            </div>
            <div className="p-3 bg-gradient-to-tr from-gray-900 via-gray-950 to-transparent rounded-b-lg">
              <Link
                href="https://www.tobischmid.com"
                target="_blank"
                aria-label="go to tobischmid.com"
                className="z-20"
              >
                <h4 className="text-xl mb-3 underline underline-offset-4 decoration-sky-950 hover:decoration-sky-800 z-20">
                  tobischmid.com
                </h4>
              </Link>
              <p className="mb-5">
                Ein persönliche Website über mich, meinen Angebot und einer
                Übersicht zu all meinen Projekten.
                <br />
              </p>
              <p className="text-sm">#Breakdance #Wordpress #SEO #Blog</p>
            </div>
          </div>
          {/* card3 */}
          <div className="relative w-[330px] hover:scale-[102%] transition-all text-slate-400 border border-1 rounded-xl border-black shadow-sm shadow-sky-800 ">
            <Link
              href="https://www.herzensstark.life"
              target="_blank"
              className="absolute w-full h-full top-0 right-0 z-10"
              aria-label="go to herzensstark.life"
            />
            <div className="w-full">
              <Image
                src={picHerzensstark}
                alt="herzensstark.life"
                width={330}
                height={100}
                className="rounded-t-xl"
              />
            </div>
            <div className="p-3 bg-gradient-to-tr from-gray-900 via-gray-950 to-transparent rounded-b-lg">
              <Link
                href="https://www.herzensstark.life/"
                target="_blank"
                aria-label="go to herzensstark.life"
                className="z-20"
              >
                <h4 className="text-xl mb-3 underline underline-offset-4 decoration-sky-950 hover:decoration-sky-800 z-30">
                  herzensstark.life
                </h4>
              </Link>
              <p className="mb-5">
                Dein Schritt in die Selbstständigkeit - unterstützt mit einer
                professionellen Website.
                <br />
              </p>
              <p className="text-sm">#Breakdance #Wordpress #Webdesign</p>
            </div>
          </div>
        </div>
        <p className="text-xl text-gray-400 sm:w-[90%] md:w-[61%] text-center">
          Ich entwickle nicht nur hochwertige Websites, sondern bin auch die
          erste Anlaufstelle für meine Kunden. Gemeinsam besprechen wir
          Probleme, entwickeln Strategien und kümmern uns um die Umsetzung.
          Besonders Einzel- und Kleinunternehmer, die oft alleine vor
          Herausforderungen stehen, schätzen diesen Service sehr.
        </p>
      </section>
      <footer className="flex gap-5 items-center justify-center text-sm text-gray-500 mt-20 mb-3">
        <Link
          href="https://www.tobischmid.com/data-protection/"
          target="_blank"
          aria-label="go to data policy"
        >
          Datenschutz
        </Link>
        <Link
          href="https://www.tobischmid.com/impressum/"
          target="_blank"
          aria-label="go to impressum"
        >
          Impressum
        </Link>
      </footer>
    </div>
  );
}
