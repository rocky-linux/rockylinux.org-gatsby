import React from 'react';

const Hero = ({ pageContext: { locale: language } }) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
          <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
            <div className="px-6 lg:px-0 lg:pt-4">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 font-display">
                    Artificial Intelligence finds a home on Rocky Linux.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                    The Rocky AI ecosystem is built on the world's
                    fastest-growing open-source enterprise operating system.
                    RockyAI powers end-to-end AI life-cycle, from development on
                    your laptop all the way to deployment on cloud using your
                    choice of software stack.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="https://sig-ai.rocky.page/docs/"
                      className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-green-600/10 ring-1 ring-green-50 dark:ring-green-900 md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
              <div className="shadow-lg md:rounded-3xl">
                <div className="bg-green-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                  <div
                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                    aria-hidden="true"
                  />
                  <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                      <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                          <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                              #Train.py
                            </div>
                            <div className="border-r border-gray-600/10 px-4 py-2">
                              #Test.py
                            </div>
                          </div>
                        </div>
                        <div className="px-6 pb-14 pt-6 dark:text-gray-50 font-mono">
                          <p>import tensorflow as tf</p>
                          <p>
                            (x_train, y_train), (x_test, y_test) =
                            text.load_data()
                          </p>
                          <p>
                            x_train, x_test = x_train / 255.0, x_test / 255.0
                          </p>
                          <p>model = tf.keras.models.Sequential([</p>
                          <p className="indent-4">
                            tf.keras.layers.Flatten(input_shape=(28, 28)),
                          </p>
                          <p className="indent-4">
                            tf.keras.layers.Dense(128, activation='relu'),
                          </p>
                          <p className="indent-4">
                            tf.keras.layers.Dropout(0.2),
                          </p>
                          <p className="indent-4">tf.keras.layers.Dense(10)</p>
                          <p>])</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-900 sm:h-32" />
        </div>
      </div>
      <div>
        <p className="text-gray-900 dark:text-white text-center">
          Let us know if you wish to see your favorite applications running on
          Rocky Linux.
        </p>
        <div className="mt-5 grid grid-cols-2 text-gray-900 dark:text-white max-w-2xl mx-auto text-lg">
          <div className="col-span-1 text-center">
            <a href="https://chat.rockylinux.org">Join Now</a>
          </div>
          <div className="col-span-1 text-center">
            <a href="https://sig-ai.rocky.page/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
