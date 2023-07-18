'use client'

import Image from 'next/image'
import Header from './components/header';
import Bingo from './components/bingo';
import Slider from './components/Slider';
import { useState } from 'react';
import Difficulty from './components/Difficulty';

type Option = [string, string[]];


export default function Home() {
  const optionsList: Option[] = [
    ["Medium", [
        "Team leader: the number of your team losses and your deaths are equal.",
        "Desert Eagle: Get 10 kills with a pistol.",
        "CSGO pro: Win a match without using any abilities.",
        "Headhunter: Get a headshot kill with both primary and secondary in the same round.",
        "Bully O'Clock: Get a knife kill.",
        "Up close and personal: Get a kill shotgun kill.",
        "Cheap and cheerful: Win a match without purchasing any weapons.",
        "Catch me if you can: Win a round without taking any damage.",
        "One shot, two kills: Get a double kill with a sniper rifle.",
        "gg no re: Win a round with a flawless victory (no team member dies).",
        "Wind, show me where to go.: Get a kill while blinded by an enemy flash.",
        "Can't keep me down: Win a match with a comeback victory (enemy team ahead by 5 points).",
        "Fireboy: Get a kill with an agent ability.",
        "Spray and pray: Get a kill through a smoke.",
        "Boom! Headshot: Win a round with all headshot kills (minimum 3).",
        "Close call: Get a kill while being low on health (below 20 HP).",
        "KJ main: Win a match without using your ultimate ability.",
        "TenZ: Win a round without reloading your weapon.",
        "Naked and proud: Win a match without purchasing any armor.",
        "Don't stop me now: Win a match without anyone getting killed by an enemy ultimate ability.",
        "The spike is mine: no enemies plant or defuse the spike.",
        "Livin' on the edge: Defuse the spike with less than 5 seconds remaining.",
        "SKRRRRA: Get a multi-kill with an agent ultimate ability.",
        "I brought my own guns: Win a match without buying any primary weapons.",
        "Escaped the matrix: Win a match without being affected by any abilities (enemy or friendly).",
        "20/20 vision: Win a round without being affected by any enemy flash.",
        "Kill confirmed: Kill the last enemy with an ultimate.",
        "Dominatrix: Win a match with at least 20 kills.",
        "I'm fast as fuck boi: Plant the spike in under 30 seconds.",
        "Clip that: Get an Ace (5 kills).",
        "You're coming down with me: Kill an enemy while dying.",
        "Ooga booga: Win a round with 5 a team of duelists",
        "Aндрей блять: Teammate dies within 2 seconds of a friendly chamber teleport",
        "Clutch or kick : Clutch a round (min 2 kills)",
        "360 no-scope: Get kill with a zoomed-out sniper",
        "Clutz : Use all your abilities in a round and get 0 kills",
        "Trust the process: Win a round without a crosshair",
        "Roulette daddy : Win a match where your agent was randomly chosen",
        "Bodyguard : protect a teammate 3 times within a single match",
        "Welcome to Riot Games : Play with a toxic teammate",
        "Deaf and blind: Win a round with 0 communications from your teammates",
        "Triggre Discipline: Wait for at least 3 seconds before shooting an enemy on your screen",
        "HUD-less: Play with the HUD disabled",
        "One-man army: Plant a spike on a bombsite only you are attacking",
        "Seriously?: Play 3 matches in a row on the same map",
        "No Hard Feelings: Kill an enemy player as they initiate their ultimate",
        "Besties: One of your teammates has the same skin for the same weapon (default skin doesn't count)",
        "Remember me: Sacrifice yourself to save a teammate or (if attacking) a planted spike",
        "Auto-pilot: Use only one primary weapon for an entire half",
        "Surprise bitch: Get a kill immediately after an agent teleport (yoru/chamber)",
        "Stone wall defence: Defend an entire site without the help of any other teammates",
        "I got my eyes on you: Get the first kill 3 rounds in a row",
        "Midlife crisis: Stop an enemy rotation through mid",
        

      ]
      
    ]
  ];
  
  const [list, setList] = useState(optionsList[0][1]);
  const [numberOf, setNumberOf] = useState(5);
  const [seed, setSeed] = useState(1234);

  return (
  <>
   <Header></Header>
   <main id="bingo-section">
      <Bingo items={list} size={numberOf} seed={seed}/>
      <div id="sliders" className="flex flex-row justify-center">
          <label className="text-lg mr-3">Board Size:</label>
          <Slider min={3} max={12} setValue={setNumberOf} defaultValue={5}/>
          <label className="text-lg mx-4"> | </label>

          <label className="text-lg mr-3">Seed</label>
          <Slider min={1} max={1000000000000} setValue={setSeed} defaultValue={1}/>

          <label className="text-lg mx-4"> | </label>

          <label className="text-lg mr-3">Difficulty</label>
          <Difficulty setList={setList} optionsList={optionsList}/>
      </div>
   </main>
   
  </>)
}
