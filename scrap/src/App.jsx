import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FloatingNav } from './floating-navbar'
import { ContainerScroll } from './container-scroll-animation'
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

function App() {
  const [count, setCount] = useState(0)
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-white-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
        <div className='h-200'>
          <FloatingNav navItems={navItems}/>
          <div class="h-200 py-16 items-center justify-center flex flex-col">
            <p class="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Your shortcut to<span class="block mt-4">everything.</span>
            </p>
            <p className='text-center font-sans pt-10'>
              A collection of powerful productivity tools all within<span class="block mt-0.5" >an extendable launcher. Fast, ergonomic and reliable.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <img
            src="/linear.webp"
            alt="hero"
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
    );
}

export default App
