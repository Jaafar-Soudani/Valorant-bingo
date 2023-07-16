'use client'

import Image from 'next/image'
import Header from './components/header';
import Bingo from './components/bingo';
import Slider from './components/Slider';
import { useState } from 'react';
import Difficulty from './components/Difficulty';

export default function Home() {
  const fakeData = [
    "The sun is shining brightly today.",
    "I love going for long walks in the park.",
    "Her smile brightened up the room.",
    "The cat chased the mouse around the house.",
    "I enjoy reading books in my free time.",
    "He played the guitar at the concert last night.",
    "The mountains are covered in snow.",
    "I can't wait to see you again.",
    "She wrote a heartfelt letter to her best friend.",
    "The car broke down on the highway.",
    "I'm feeling tired after a long day at work.",
    "The children played happily in the playground.",
    "The flowers bloomed beautifully in the spring.",
    "He scored a goal in the final minute of the game.",
    "I'm going on vacation next week.",
    "She cooked a delicious meal for her family.",
    "The train arrived at the station on time.",
    "I need to buy groceries for the week.",
    "They went swimming in the ocean.",
    "I enjoy listening to music while I work.",
    "The movie was entertaining and funny.",
    "I'm learning a new language.",
    "The rain stopped and a rainbow appeared in the sky.",
    "She wore a stunning red dress to the party.",
    "I'm excited about the upcoming concert.",
    "He built a sandcastle at the beach.",
    "The dog wagged its tail happily.",
    "I like to drink coffee in the morning.",
    "She received a promotion at work.",
    "The book kept me captivated until the last page.",
    "I'm planning a surprise party for my friend.",
    "He ran a marathon and finished in first place.",
    "The painting hung on the wall of the museum.",
    "I enjoy spending time with my family and friends.",
    "She won an award for her outstanding performance.",
    "The alarm clock woke me up early in the morning.",
    "I'm going to the gym to exercise.",
    "He played the piano beautifully.",
    "The birds chirped merrily in the trees.",
    "I'm studying for an important exam.",
    "She baked a delicious cake for her sister's birthday.",
    "The soccer team won the championship.",
    "I'm looking forward to the weekend.",
    "He wrote a heartfelt poem for his girlfriend.",
    "The river flowed peacefully through the valley.",
    "I enjoy watching movies at the cinema.",
    "She gave a speech at the conference.",
    "The snowflakes fell gently from the sky.",
    "I'm going to the beach to relax.",
    "He helped his neighbor carry groceries.",
    "The museum displayed ancient artifacts.",
    "I'm taking a photography class.",
    "She danced gracefully on the stage.",
    "The wind blew through the trees.",
    "I'm volunteering at a local charity.",
    "He fixed the broken bicycle.",
    "The fireworks lit up the night sky.",
    "I enjoy cooking dinner for my family.",
    "She sang a beautiful song at the talent show.",
    "The waves crashed against the shore.",
    "I'm going to a concert with my friends.",
    "He wrote a book about his travels.",
    "The stars twinkled in the dark night.",
    "I'm starting a new job next month.",
    "She planted flowers in her garden.",
    "The basketball team won the game.",
    "I'm going to a party this weekend.",
    "He painted a colorful mural on the wall.",
    "The leaves rustled in the autumn breeze.",
    "I'm attending a wedding next week.",
    "She adopted a stray kitten.",
    "The orchestra played a beautiful symphony.",
    "I'm going on a road trip with my family.",
    "He took a photograph of the sunset.",
    "The city skyline was breathtaking.",
    "I'm learning how to play the guitar.",
    "She ran a marathon and crossed the finish line.",
    "The thunderstorm raged outside.",
    "I'm going to a music festival this summer.",
    "He cooked a delicious meal for his friends.",
    "The sun set behind the mountains.",
    "I'm going to the theater to watch a play.",
    "She donated money to a local charity.",
    "The flowers bloomed in vibrant colors.",
    "I'm attending a conference next month.",
    "He built a birdhouse in his backyard.",
    "The children laughed and played together.",
    "I'm going to a museum to see an art exhibit.",
    "She learned how to swim.",
    "The waterfall cascaded down the rocks.",
    "I'm starting a new project at work.",
    "He baked cookies for his coworkers.",
    "The autumn leaves fell from the trees.",
    "I'm going on a hiking trip next weekend.",
    "She painted a portrait of her family.",
    "The waves crashed against the cliff.",
    "I'm going to a comedy show tonight.",
    "He volunteered at a homeless shelter.",
    "The sunflower turned towards the sun.",
    "I'm taking a yoga class to relax.",
    "She won a scholarship to study abroad.",
    "The symphony orchestra performed a beautiful concert.",
    "I'm going to a baseball game with my friends.",
    "He wrote a screenplay for a movie.",
    "The snow covered the ground in a thick blanket.",
    "I'm going to a fancy restaurant for dinner.",
    "She danced in the rain and didn't care.",
    "The windmill spun in the breeze.",
    "I'm starting a new hobby.",
    "He taught his son how to ride a bike.",
    "The fireworks lit up the sky in brilliant colors.",
    "I'm going to a music concert this weekend."
  ]
  
  const [list, setList] = useState(fakeData);
  const [numberOf, setNumberOf] = useState(5);
  const [seed, setSeed] = useState(1234);

  return (
  <>
   <Header></Header>
   <main id="bingo-section">
      <Bingo items={list} size={numberOf} seed={seed}/>
      <div id="sliders" className="flex flex-row justify-center">
          <label className="text-lg mr-3">Board Size:</label>
          <Slider min={3} max={12} setValue={setNumberOf}/>
          <label className="text-lg mx-4"> | </label>

          <label className="text-lg mr-3">Seed</label>
          <Slider min={1} max={1000000000000} setValue={setSeed}/>

          <label className="text-lg mx-4"> | </label>

          <label className="text-lg mr-3">Difficulty</label>
          <Difficulty setList={setList}/>
      </div>
   </main>
   
  </>)
}
