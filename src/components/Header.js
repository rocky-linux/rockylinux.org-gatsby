/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChatIcon, ChevronDownIcon, DownloadIcon } from '@heroicons/react/solid';
import { Translate } from '../../i18n/utils/translate';
import LocalizedLink from '../components/LocalizedLink';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = ({ pageContext: { locale: language } }) => {
  const translate = Translate();
  const about = [
    {
      name: `${translate('about.about')}`,
      href: '/about',
    },
    {
      name: `${translate('about.faq')}`,
      href: '/faq',
    },
    {
      name: `${translate('about.charter')}`,
      href: '/community-charter',
    },
    {
      name: `${translate('about.org-structure')}`,
      href: '/organizational-structure',
    },
    {
      name: `${translate('about.sponsors')}`,
      href: '/sponsors',
    },
    {
      name: `${translate('about.partners')}`,
      href: '/partners',
    },
    {
      name: `${translate('about.support')}`,
      href: '/support',
    },
  ];
  const community = [
    {
      name: 'Merch',
      href: '/merch',
    },
    {
      name: `${translate('community.contribute')}`,
      href: 'https://wiki.rockylinux.org/contributing/',
    },
    {
      name: `${translate('community.forums')}`,
      href: 'https://forums.rockylinux.org',
    },
    {
      name: `${translate('community.mailing')}`,
      href: 'https://lists.resf.org',
    },
    {
      name: `${translate('community.mattermost')}`,
      href: 'https://chat.rockylinux.org',
    },
    {
      name: `${translate('community.irc')}`,
      href: 'https://wiki.rockylinux.org/irc/',
    },
    {
      name: `${translate('community.calendar')}`,
      href: 'https://calendar.google.com/calendar/u/0/embed?src=c_2e1oqh6t0i6sqhja5nu9lq8lgo@group.calendar.google.com',
    },
    {
      name: `${translate('community.bug')}`,
      href: 'https://bugs.rockylinux.org/',
    },
  ];
  const documentation = [
    {
      name: `${translate('documentation.wiki')}`,
      href: 'https://wiki.rockylinux.org/',
    },
    {
      name: `${translate('documentation.guides')}`,
      href: 'https://docs.rockylinux.org/',
    },
    {
      name: `${translate('documentation.keys')}`,
      href: '/keys',
    },
  ];

  return (
    <>
      <noscript>
        <div className="relative bg-red-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="hidden lg:inline">
                  {translate('js-warning')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </noscript>

      <div className="dark:bg-gray-800 bg-gray-200">
        <div className="mx-auto max-w-7xl py-2 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <a href="https://resf.org">
                <span className="flex">
                  <svg
                    className="h-4"
                    viewBox="0 0 168 168"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H168V104.009L142.011 78.0197L122.601 97.4302L83.7808 58.6098L64.3712 78.0194L25.5511 39.1993L0 64.7504V0Z"
                      fill="url(#paint0_linear_1010_235)"
                    />
                    <path
                      d="M142.011 107.135L81.1463 168H168V133.124L142.011 107.135Z"
                      fill="url(#paint1_linear_1010_235)"
                    />
                    <path
                      d="M83.7807 87.7251L108.043 111.988L52.0312 168H3.50575L83.7807 87.7251Z"
                      fill="url(#paint2_linear_1010_235)"
                    />
                    <path
                      d="M25.5511 68.3144L0 93.8656V142.391L49.8137 92.577L25.5511 68.3144Z"
                      fill="url(#paint3_linear_1010_235)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1010_235"
                        x1="0"
                        y1="0"
                        x2="168"
                        y2="168"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#10B981" />
                        <stop offset="1" stop-color="#1054B9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1010_235"
                        x1="0"
                        y1="0"
                        x2="168"
                        y2="168"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#10B981" />
                        <stop offset="1" stop-color="#1054B9" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1010_235"
                        x1="0"
                        y1="0"
                        x2="168"
                        y2="168"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#10B981" />
                        <stop offset="1" stop-color="#1054B9" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1010_235"
                        x1="0"
                        y1="0"
                        x2="168"
                        y2="168"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#10B981" />
                        <stop offset="1" stop-color="#1054B9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </a>
              <p className="ml-2 truncate font-light text-lg dark:text-white text-black uppercase">
                <a href="https://resf.org">
                  An <span className="font-bold text-md">RESF</span> Project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Popover className="relative">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 lg:justify-start lg:space-x-10 max-w-7xl mx-auto">
          <div>
            <LocalizedLink to="/" language={language} className="flex">
              <span className="sr-only">Rocky Linux</span>
              <svg
                className="h-6 w-auto sm:h-8 logo-text"
                width="1101"
                height="193"
                viewBox="0 0 1101 193"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M186.658 128.658C190.119 118.746 192 108.093 192 97C192 43.9807 149.019 1 96 1C42.9807 1 0 43.9807 0 97C0 123.234 10.523 147.011 27.5783 164.338L124.958 66.9584L149 91L186.658 128.658ZM169.122 159.205L124.958 115.042L55.7978 184.202C68.0269 189.849 81.6455 193 96 193C125.288 193 151.514 179.884 169.122 159.205Z"
                  fill="#10B981"
                />
                <path
                  d="M251.072 147V46.2H300.32C305.408 46.2 310.064 46.968 314.288 48.504C318.608 50.04 322.304 52.2 325.376 54.984C328.448 57.672 330.848 60.936 332.576 64.776C334.304 68.616 335.168 72.84 335.168 77.448C335.168 83.784 333.344 89.448 329.696 94.44C326.144 99.432 321.392 103.128 315.44 105.528L337.76 147H314.432L294.704 108.408H271.952V147H251.072ZM298.448 64.2H271.952V91.272H298.448C303.152 91.272 306.896 90.024 309.68 87.528C312.56 85.032 314 81.768 314 77.736C314 73.704 312.56 70.44 309.68 67.944C306.896 65.448 303.152 64.2 298.448 64.2ZM339.695 109.56C339.695 104.088 340.703 99 342.719 94.296C344.831 89.496 347.663 85.368 351.215 81.912C354.863 78.36 359.135 75.576 364.031 73.56C368.927 71.544 374.159 70.536 379.727 70.536C385.295 70.536 390.527 71.544 395.423 73.56C400.319 75.576 404.543 78.36 408.095 81.912C411.743 85.368 414.575 89.496 416.591 94.296C418.703 99 419.759 104.088 419.759 109.56C419.759 115.032 418.703 120.168 416.591 124.968C414.575 129.672 411.743 133.752 408.095 137.208C404.543 140.664 400.319 143.4 395.423 145.416C390.527 147.432 385.295 148.44 379.727 148.44C374.159 148.44 368.927 147.432 364.031 145.416C359.135 143.4 354.863 140.664 351.215 137.208C347.663 133.752 344.831 129.672 342.719 124.968C340.703 120.168 339.695 115.032 339.695 109.56ZM379.727 131.304C385.487 131.304 390.383 129.192 394.415 124.968C398.447 120.744 400.463 115.608 400.463 109.56C400.463 103.416 398.447 98.232 394.415 94.008C390.383 89.784 385.487 87.672 379.727 87.672C373.967 87.672 369.071 89.784 365.039 94.008C361.007 98.232 358.991 103.416 358.991 109.56C358.991 115.608 361.007 120.744 365.039 124.968C369.071 129.192 373.967 131.304 379.727 131.304ZM469.168 131.16C472.528 131.16 475.648 130.488 478.528 129.144C481.504 127.8 484.336 125.688 487.024 122.808L498.832 135.048C494.992 139.272 490.384 142.584 485.008 144.984C479.632 147.288 474.064 148.44 468.304 148.44C462.832 148.44 457.648 147.432 452.752 145.416C447.952 143.4 443.776 140.664 440.224 137.208C436.768 133.752 434.032 129.672 432.016 124.968C430 120.168 428.992 115.032 428.992 109.56C428.992 104.088 430 99 432.016 94.296C434.032 89.496 436.768 85.368 440.224 81.912C443.776 78.36 447.952 75.576 452.752 73.56C457.648 71.544 462.832 70.536 468.304 70.536C474.256 70.536 479.968 71.736 485.44 74.136C490.912 76.44 495.568 79.704 499.408 83.928L487.312 96.744C484.624 93.768 481.744 91.512 478.672 89.976C475.6 88.44 472.288 87.672 468.736 87.672C463.072 87.672 458.272 89.784 454.336 94.008C450.496 98.232 448.576 103.416 448.576 109.56C448.576 115.704 450.544 120.84 454.48 124.968C458.512 129.096 463.408 131.16 469.168 131.16ZM509.089 147V46.2L528.817 41.88V103.656L561.217 71.976H583.537L548.401 106.392L585.697 147H560.497L528.817 112.728V147H509.089ZM612.643 150.456L613.795 147.72L584.562 71.976H606.307L624.883 123.096L646.195 71.976H667.507L632.947 152.904C629.107 161.928 624.643 168.36 619.555 172.2C614.467 176.04 607.843 177.96 599.683 177.96C597.955 177.96 596.275 177.864 594.643 177.672C593.107 177.576 591.859 177.384 590.899 177.096V160.104C591.859 160.296 592.867 160.44 593.923 160.536C594.979 160.632 596.275 160.68 597.811 160.68C601.363 160.68 604.339 159.816 606.739 158.088C609.235 156.36 611.203 153.816 612.643 150.456ZM706.744 147V46.2H717.832V137.064H777.88V147H706.744ZM796.963 61.032C795.043 61.032 793.363 60.312 791.923 58.872C790.483 57.432 789.763 55.752 789.763 53.832C789.763 51.816 790.483 50.136 791.923 48.792C793.363 47.352 795.043 46.632 796.963 46.632C798.979 46.632 800.659 47.352 802.003 48.792C803.443 50.136 804.163 51.816 804.163 53.832C804.163 55.752 803.443 57.432 802.003 58.872C800.659 60.312 798.979 61.032 796.963 61.032ZM802.291 74.856V147H791.635V74.856H802.291ZM820.463 147V74.856H831.119V83.352C833.903 80.088 837.215 77.64 841.055 76.008C844.895 74.28 849.167 73.416 853.871 73.416C862.031 73.416 868.703 76.008 873.887 81.192C879.071 86.376 881.663 93.096 881.663 101.352V147H871.151V103.512C871.151 97.176 869.327 92.136 865.679 88.392C862.031 84.648 857.135 82.776 850.991 82.776C846.671 82.776 842.783 83.736 839.327 85.656C835.967 87.576 833.231 90.312 831.119 93.864V147H820.463ZM909.015 74.856V118.344C909.015 124.68 910.839 129.72 914.487 133.464C918.135 137.208 923.031 139.08 929.175 139.08C933.495 139.08 937.335 138.12 940.695 136.2C944.151 134.184 946.935 131.4 949.047 127.848V74.856H959.703V147H949.047V138.648C946.263 141.912 942.951 144.36 939.111 145.992C935.367 147.624 931.143 148.44 926.439 148.44C918.183 148.44 911.463 145.848 906.279 140.664C901.095 135.48 898.503 128.76 898.503 120.504V74.856H909.015ZM969.47 147L997.838 109.848L970.91 74.856H983.582L1004.03 101.928L1024.48 74.856H1036.72L1010.08 109.704L1038.59 147H1025.92L1003.89 117.624L981.566 147H969.47Z"
                  class="logo-text"
                />
                <path
                  d="M1048 70.624V54.976H1042.82V51.952H1048V45.856L1051.5 44.944V51.952H1058.75V54.976H1051.5V69.712C1051.5 70.992 1051.79 71.92 1052.37 72.496C1052.94 73.04 1053.89 73.312 1055.2 73.312C1055.87 73.312 1056.46 73.264 1056.98 73.168C1057.52 73.072 1058.1 72.912 1058.7 72.688V75.808C1058.1 76.032 1057.41 76.192 1056.64 76.288C1055.9 76.384 1055.18 76.432 1054.48 76.432C1052.4 76.432 1050.8 75.936 1049.68 74.944C1048.56 73.952 1048 72.512 1048 70.624ZM1062.56 76V51.952H1066.11V54.592C1067 53.568 1068.04 52.8 1069.23 52.288C1070.41 51.744 1071.72 51.472 1073.16 51.472C1074.83 51.472 1076.32 51.872 1077.63 52.672C1078.97 53.44 1080.01 54.496 1080.75 55.84C1081.74 54.368 1082.92 53.28 1084.3 52.576C1085.71 51.84 1087.28 51.472 1089 51.472C1091.6 51.472 1093.71 52.336 1095.34 54.064C1097 55.792 1097.84 58.032 1097.84 60.784V76H1094.33V61.504C1094.33 59.392 1093.77 57.712 1092.65 56.464C1091.53 55.216 1090.01 54.592 1088.09 54.592C1086.78 54.592 1085.58 54.928 1084.49 55.6C1083.4 56.272 1082.48 57.248 1081.71 58.528C1081.77 58.88 1081.82 59.248 1081.85 59.632C1081.92 59.984 1081.95 60.368 1081.95 60.784V76H1078.44V61.504C1078.44 59.392 1077.88 57.712 1076.76 56.464C1075.64 55.216 1074.14 54.592 1072.25 54.592C1070.97 54.592 1069.8 54.896 1068.75 55.504C1067.72 56.08 1066.84 56.944 1066.11 58.096V76H1062.56Z"
                  class="logo-text"
                />
              </svg>
            </LocalizedLink>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <LocalizedLink
                to="/news/1"
                language={language}
                className="text-base font-medium text-gray-500 dark:text-gray-50 hover:text-gray-900 dark:hover:text-green-500"
              >
                {translate('categories.news')}
              </LocalizedLink>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-gray-50 dark:bg-gray-900 dark:text-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                      )}
                    >
                      <span>{translate('categories.about')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-gray-50 dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                            {about.map((item) => (
                              <LocalizedLink
                                key={item.name}
                                to={item.href}
                                language={language}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                                  {item.name}
                                </p>
                              </LocalizedLink>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-gray-50 dark:bg-gray-900 dark:text-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                      )}
                    >
                      <span>{translate('categories.community')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-gray-50 dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                            {community.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                              >
                                <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                                  {item.name}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-gray-50 dark:bg-gray-900 dark:text-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                      )}
                    >
                      <span>{translate('categories.documentation')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                        <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-gray-50 dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                            {documentation.map((item) => (
                              <LocalizedLink
                                key={item.name}
                                to={item.href}
                                language={language}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                              >
                                <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </LocalizedLink>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="flex items-center lg:ml-12">
              <LocalizedLink
                to="https://chat.rockylinux.org"
                language={language}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600"
              >
	        <ChatIcon className="h-6 w-6" />
                {translate('chat')}
              </LocalizedLink>
              <LocalizedLink
                to="/download"
                language={language}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600"
              >
	        <DownloadIcon className="h-6 w-6" />
                {translate('download')}
              </LocalizedLink>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 dark:divide-gray-700">
              <div className="pt-5 pb-6 px-5 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <svg
                      className="h-8 w-auto"
                      viewBox="0 0 1101 193"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M186.658 128.658C190.119 118.746 192 108.093 192 97C192 43.9807 149.019 1 96 1C42.9807 1 0 43.9807 0 97C0 123.234 10.523 147.011 27.5783 164.338L124.958 66.9584L149 91L186.658 128.658ZM169.122 159.205L124.958 115.042L55.7978 184.202C68.0269 189.849 81.6455 193 96 193C125.288 193 151.514 179.884 169.122 159.205Z"
                        fill="#10B981"
                      />
                      <path
                        d="M251.072 147V46.2H300.32C305.408 46.2 310.064 46.968 314.288 48.504C318.608 50.04 322.304 52.2 325.376 54.984C328.448 57.672 330.848 60.936 332.576 64.776C334.304 68.616 335.168 72.84 335.168 77.448C335.168 83.784 333.344 89.448 329.696 94.44C326.144 99.432 321.392 103.128 315.44 105.528L337.76 147H314.432L294.704 108.408H271.952V147H251.072ZM298.448 64.2H271.952V91.272H298.448C303.152 91.272 306.896 90.024 309.68 87.528C312.56 85.032 314 81.768 314 77.736C314 73.704 312.56 70.44 309.68 67.944C306.896 65.448 303.152 64.2 298.448 64.2ZM339.695 109.56C339.695 104.088 340.703 99 342.719 94.296C344.831 89.496 347.663 85.368 351.215 81.912C354.863 78.36 359.135 75.576 364.031 73.56C368.927 71.544 374.159 70.536 379.727 70.536C385.295 70.536 390.527 71.544 395.423 73.56C400.319 75.576 404.543 78.36 408.095 81.912C411.743 85.368 414.575 89.496 416.591 94.296C418.703 99 419.759 104.088 419.759 109.56C419.759 115.032 418.703 120.168 416.591 124.968C414.575 129.672 411.743 133.752 408.095 137.208C404.543 140.664 400.319 143.4 395.423 145.416C390.527 147.432 385.295 148.44 379.727 148.44C374.159 148.44 368.927 147.432 364.031 145.416C359.135 143.4 354.863 140.664 351.215 137.208C347.663 133.752 344.831 129.672 342.719 124.968C340.703 120.168 339.695 115.032 339.695 109.56ZM379.727 131.304C385.487 131.304 390.383 129.192 394.415 124.968C398.447 120.744 400.463 115.608 400.463 109.56C400.463 103.416 398.447 98.232 394.415 94.008C390.383 89.784 385.487 87.672 379.727 87.672C373.967 87.672 369.071 89.784 365.039 94.008C361.007 98.232 358.991 103.416 358.991 109.56C358.991 115.608 361.007 120.744 365.039 124.968C369.071 129.192 373.967 131.304 379.727 131.304ZM469.168 131.16C472.528 131.16 475.648 130.488 478.528 129.144C481.504 127.8 484.336 125.688 487.024 122.808L498.832 135.048C494.992 139.272 490.384 142.584 485.008 144.984C479.632 147.288 474.064 148.44 468.304 148.44C462.832 148.44 457.648 147.432 452.752 145.416C447.952 143.4 443.776 140.664 440.224 137.208C436.768 133.752 434.032 129.672 432.016 124.968C430 120.168 428.992 115.032 428.992 109.56C428.992 104.088 430 99 432.016 94.296C434.032 89.496 436.768 85.368 440.224 81.912C443.776 78.36 447.952 75.576 452.752 73.56C457.648 71.544 462.832 70.536 468.304 70.536C474.256 70.536 479.968 71.736 485.44 74.136C490.912 76.44 495.568 79.704 499.408 83.928L487.312 96.744C484.624 93.768 481.744 91.512 478.672 89.976C475.6 88.44 472.288 87.672 468.736 87.672C463.072 87.672 458.272 89.784 454.336 94.008C450.496 98.232 448.576 103.416 448.576 109.56C448.576 115.704 450.544 120.84 454.48 124.968C458.512 129.096 463.408 131.16 469.168 131.16ZM509.089 147V46.2L528.817 41.88V103.656L561.217 71.976H583.537L548.401 106.392L585.697 147H560.497L528.817 112.728V147H509.089ZM612.643 150.456L613.795 147.72L584.562 71.976H606.307L624.883 123.096L646.195 71.976H667.507L632.947 152.904C629.107 161.928 624.643 168.36 619.555 172.2C614.467 176.04 607.843 177.96 599.683 177.96C597.955 177.96 596.275 177.864 594.643 177.672C593.107 177.576 591.859 177.384 590.899 177.096V160.104C591.859 160.296 592.867 160.44 593.923 160.536C594.979 160.632 596.275 160.68 597.811 160.68C601.363 160.68 604.339 159.816 606.739 158.088C609.235 156.36 611.203 153.816 612.643 150.456ZM706.744 147V46.2H717.832V137.064H777.88V147H706.744ZM796.963 61.032C795.043 61.032 793.363 60.312 791.923 58.872C790.483 57.432 789.763 55.752 789.763 53.832C789.763 51.816 790.483 50.136 791.923 48.792C793.363 47.352 795.043 46.632 796.963 46.632C798.979 46.632 800.659 47.352 802.003 48.792C803.443 50.136 804.163 51.816 804.163 53.832C804.163 55.752 803.443 57.432 802.003 58.872C800.659 60.312 798.979 61.032 796.963 61.032ZM802.291 74.856V147H791.635V74.856H802.291ZM820.463 147V74.856H831.119V83.352C833.903 80.088 837.215 77.64 841.055 76.008C844.895 74.28 849.167 73.416 853.871 73.416C862.031 73.416 868.703 76.008 873.887 81.192C879.071 86.376 881.663 93.096 881.663 101.352V147H871.151V103.512C871.151 97.176 869.327 92.136 865.679 88.392C862.031 84.648 857.135 82.776 850.991 82.776C846.671 82.776 842.783 83.736 839.327 85.656C835.967 87.576 833.231 90.312 831.119 93.864V147H820.463ZM909.015 74.856V118.344C909.015 124.68 910.839 129.72 914.487 133.464C918.135 137.208 923.031 139.08 929.175 139.08C933.495 139.08 937.335 138.12 940.695 136.2C944.151 134.184 946.935 131.4 949.047 127.848V74.856H959.703V147H949.047V138.648C946.263 141.912 942.951 144.36 939.111 145.992C935.367 147.624 931.143 148.44 926.439 148.44C918.183 148.44 911.463 145.848 906.279 140.664C901.095 135.48 898.503 128.76 898.503 120.504V74.856H909.015ZM969.47 147L997.838 109.848L970.91 74.856H983.582L1004.03 101.928L1024.48 74.856H1036.72L1010.08 109.704L1038.59 147H1025.92L1003.89 117.624L981.566 147H969.47Z"
                        class="logo-text"
                      />
                      <path
                        d="M1048 70.624V54.976H1042.82V51.952H1048V45.856L1051.5 44.944V51.952H1058.75V54.976H1051.5V69.712C1051.5 70.992 1051.79 71.92 1052.37 72.496C1052.94 73.04 1053.89 73.312 1055.2 73.312C1055.87 73.312 1056.46 73.264 1056.98 73.168C1057.52 73.072 1058.1 72.912 1058.7 72.688V75.808C1058.1 76.032 1057.41 76.192 1056.64 76.288C1055.9 76.384 1055.18 76.432 1054.48 76.432C1052.4 76.432 1050.8 75.936 1049.68 74.944C1048.56 73.952 1048 72.512 1048 70.624ZM1062.56 76V51.952H1066.11V54.592C1067 53.568 1068.04 52.8 1069.23 52.288C1070.41 51.744 1071.72 51.472 1073.16 51.472C1074.83 51.472 1076.32 51.872 1077.63 52.672C1078.97 53.44 1080.01 54.496 1080.75 55.84C1081.74 54.368 1082.92 53.28 1084.3 52.576C1085.71 51.84 1087.28 51.472 1089 51.472C1091.6 51.472 1093.71 52.336 1095.34 54.064C1097 55.792 1097.84 58.032 1097.84 60.784V76H1094.33V61.504C1094.33 59.392 1093.77 57.712 1092.65 56.464C1091.53 55.216 1090.01 54.592 1088.09 54.592C1086.78 54.592 1085.58 54.928 1084.49 55.6C1083.4 56.272 1082.48 57.248 1081.71 58.528C1081.77 58.88 1081.82 59.248 1081.85 59.632C1081.92 59.984 1081.95 60.368 1081.95 60.784V76H1078.44V61.504C1078.44 59.392 1077.88 57.712 1076.76 56.464C1075.64 55.216 1074.14 54.592 1072.25 54.592C1070.97 54.592 1069.8 54.896 1068.75 55.504C1067.72 56.08 1066.84 56.944 1066.11 58.096V76H1062.56Z"
                        class="logo-text"
                      />
                    </svg>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-50 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {about.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="ml-4 text-base font-medium text-gray-900 dark:text-gray-50">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 dark:bg-gray-800">
                <div className="grid grid-cols-2 gap-4">
                  {documentation.map((item) => (
                    <LocalizedLink
                      key={item.name}
                      to={item.href}
                      language={language}
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-50"
                    >
                      {item.name}
                    </LocalizedLink>
                  ))}
                  {community.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6">
                  <LocalizedLink
                    to="https://chat.rockylinux.org"
                    language={language}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent dark:border-gray-800 rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600"
                  >
	            <ChatIcon className="h-6 w-6" />
                    {translate('chat')}
                  </LocalizedLink>
                  <LocalizedLink
                    to="/download"
                    language={language}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent dark:border-gray-800 rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600"
                  >
	            <DownloadIcon className="h-6 w-6" />
                    {translate('download')}
                  </LocalizedLink>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Header;
