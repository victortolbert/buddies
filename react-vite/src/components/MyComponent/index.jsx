import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { BeakerIcon } from '@heroicons/react/solid'

function MyComponent() {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <>
      <BeakerIcon className="w-5 h-5 text-blue-500" />

      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        I will fade in and out
      </Transition>
    </>
  )
}

export default MyComponent
