import React from 'react'
import axios from 'axios'
import Character from './Character'
import { useState, useEffect } from 'react'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);
  const [mappedPeople, setMappedPeople] = useState([]);

  useEffect(() => {
    axios.get(urlPlanets)
      .then(res => {
        setPlanets(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get(urlPeople)
      .then(res => {
        setPeople(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    const mappedPeopleData = people.map(person => {
      const homeworldId = person.homeworld
      const homeworld = planets.find(planet => planet.id === homeworldId);
      return { ...person, homeworld };
    });
    setMappedPeople(mappedPeopleData)
  }, [people, planets])


  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
        mappedPeople.map(character => (
          <Character key={character.id} character={character} />
        ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
