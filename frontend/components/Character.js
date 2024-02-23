import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  const { character } = props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [isHomeworldRendering, setIsHomeworldRendering] = useState(false);

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworldRendering = () => {
    setIsHomeworldRendering(previousState => !previousState);
  };


  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */
        <div onClick={toggleHomeworldRendering} className='character-card'>
          <h3 className='character-name'>
            {character.name}
          </h3>
          {isHomeworldRendering ?
            <p>
              Planet: {" "}
              <span className='character-planet'>
                {character.homeworld.name}

              </span>
            </p> : null}
        </div>}
    </div>
  )
}

export default Character
