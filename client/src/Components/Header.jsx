// import { Fragment, useState } from "react";
// import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
//
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   PhoneIcon,
//   PlayCircleIcon,
// } from "@heroicons/react/20/solid";

// import { Link } from "react-router-dom";

// const products = [
//   {
//     name: "Shop",
//     href: "/shop",
//   },
//   {
//     name: "Gallery",
//     href: "/gallery",
//   },
// ];
// const callsToAction = [
//   { name: "Shop", href: "/shop" },
//   { name: "Gallery", href: "/gallery" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   return (
//     <>
//       <header
//       // className="bg-[#FFF8EB] flex justify-between"
// style={{
//   backgroundImage:
//     "linear-gradient(to right, #161928 40%, #4E598E 100%)",
// }}
//       >
//         <nav
//           className="mx-auto flex max-w-7xl items-center justify-between h-[5em] w-4/6"
//           aria-label="Global"
//         >
//           <div className="flex lg:flex-1">
//             <Link to="" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img className="w-auto h-[5em]" src={Logo} alt="" />
//             </Link>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>

//           <Popover.Group className="hidden lg:flex lg:gap-x-12">
//             <Link
//               to=""
//               className="text-sm font-semibold leading-6 text-white tracking-wider"
//             >
//               Home
//             </Link>
//             <Popover className="relative">
//               <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white bg-[#2b314e] tracking-wider">
//                 Features
//                 <ChevronDownIcon
//                   className="h-5 w-5 flex-none text-gray-400"
//                   aria-hidden="true"
//                 />
//               </Popover.Button>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[10em] overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
//                   <div className="p-4">
//                     {products.map((item) => (
//                       <div
//                         key={item.name}
//                         className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 bg-white"
//                       >
//                         <div className="flex-auto">
//                           <Link
//                             to={item.href}
//                             className="block font-semibold text-gray-900"
//                           >
//                             {item.name}
//                             <span className="absolute inset-0" />
//                           </Link>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//                     {callsToAction.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.href}
//                         className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
//                       ></Link>
//                     ))}
//                   </div>
//                 </Popover.Panel>
//               </Transition>
//             </Popover>

//             <Link
//               to="/speakers"
//               className="text-sm font-semibold leading-6 text-white tracking-wider"
//             >
//               Speakers
//             </Link>
//             <Link
//               to="/contact"
//               className="text-sm font-semibold leading-6 text-white tracking-wider"
//             >
//               Contacts
//             </Link>
//           </Popover.Group>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <Link
//               to="/ticket"
//               className="text-sm font-semibold leading-6 text-black bg-gradient-to-r from-[#FFE07A] to-[#7A5103] px-4 py-2 rounded-lg"
//             >
//               Purchase Ticket
//             </Link>
//           </div>
//         </nav>
//         <Dialog
//           as="div"
//           className="lg:hidden"
//           open={mobileMenuOpen}
//           onClose={setMobileMenuOpen}
//         >
//           <div className="fixed inset-0 z-10" />
//           <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <Link
//                 to=""
//                 className="-m-1.5 p-1.5"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(to right, #161928 40%, #4E598E 100%)",
//                 }}
//               >
//                 <img className="w-auto h-[5em]" src={Logo} alt="" />
//               </Link>
//               <button
//                 type="button"
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon
//                   className="h-6 w-6 text-white bg-black"
//                   aria-hidden="true"
//                 />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div
//                 className="-my-6 divide-y divide-gray-500/10"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(to right, #161928 40%, #4E598E 100%)",
//                 }}
//               >
//                 <div className="space-y-2 py-6">
//                   <Disclosure as="div" className="-mx-3">
//                     {({ open }) => (
//                       <>
//                         <Link
//                           to="/"
//                           className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
//                         >
//                           Home
//                         </Link>
//                         <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
//                           Features
//                           <ChevronDownIcon
//                             className={classNames(
//                               open ? "rotate-180" : "",
//                               "h-5 w-5 flex-none"
//                             )}
//                             aria-hidden="true"
//                           />
//                         </Disclosure.Button>
//                         <Disclosure.Panel className="mt-2 space-y-2">
//                           {[...products].map((item) => (
//                             <Disclosure.Button
//                               key={item.name}
//                               as="a"
//                               href={item.href}
//                               className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50 text-white"
//                             >
//                               {item.name}
//                             </Disclosure.Button>
//                           ))}
//                         </Disclosure.Panel>
//                       </>
//                     )}
//                   </Disclosure>
//                   <Link
//                     to="/speakers"
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
//                   >
//                     Speakers
//                   </Link>
//                   <Link
//                     to="/contact"
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
//                   >
//                     Contacts
//                   </Link>
//                 </div>
//                 <div className="py-6">
//                   <Link
//                     to="#"
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-linear-gradient(to right, #161928 40%, #4E598E 100%)"
//                   >
//                     Purchase Ticket
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </Dialog.Panel>
//         </Dialog>
//       </header>
//     </>
//   );
// };

// export default Header;
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo/logo1.png";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Speakers", href: "/speakers", current: false },
  { name: "Shop", href: "/shop", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Contacts", href: "/contact", current: false },
  { name: "Buy Tickets", href: "/ticket", current: false },
];

function updateCurrentNavigation(href) {
  navigation.forEach((item) => {
    if (item.href === href) {
      item.current = true;
    } else {
      item.current = false;
    }
  });
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      className="fixed top-0 z-[999] w-full"
      as="nav"
      style={{
        backgroundImage: "linear-gradient(to right, #161928 40%, #4E598E 100%)",
      }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={Logo} alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */}
              {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

              {/* Profile dropdown */}
              {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              {/* </div> */}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={() => updateCurrentNavigation(item.href)}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
