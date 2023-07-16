'use client'
import React, { useState , useEffect} from 'react'


class SeedRandomizer {
    private seed: number;
  
    constructor(seed: number) {
      this.seed = seed;
    }
  
    // Generate a random number between 0 and 1
    public random(max: number) {
      const x = Math.sin(this.seed++) * max;
      return Math.floor(x);
    }

  }

export default function Bingo({items, size, seed}:any) {
    //const [seed, setSeed] = useState<number>(4);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    // Function to handle button click
    const handleItemClick = (item: string) => {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    };

    //Initialize a list of buttons
    const [grid, setGrid] = useState<String[][]>([]);
    function isXInSecondPosition(arr:string[][], X:string) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].length >= 2 && arr[i][1] === X) {
            return true;
          }
        }
        return false;
      }

    useEffect(()=>{
        const randomizer = new SeedRandomizer(seed);
        console.log(size*size, items.length);
        setSelectedItems([]) ;
        let conlficts = 0;
        const newGrid : string[][] = [];
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
              let randomItem = items[Math.abs(randomizer.random(items.length)) % items.length];
              while(size*size<items.length && isXInSecondPosition(newGrid, randomItem)){
                conlficts +=1 ;
                randomItem = items[Math.abs(randomizer.random(items.length)) % items.length];
              }
              const itemKey = `${i}-${j}`;
              newGrid.push( [itemKey, randomItem]);
              ;
            }
          }    
          console.log(`While generating random, ran into ${conlficts} conflics`)
          setGrid(newGrid)
    }, [seed, size, items]);
    
  
    

    return (
    <div className="flex flex-row justify-center">
        <div className="card bg-black my-5 mx-20 p-5 max-w-6xl rounded rounded-3xl shadow bg-opacity-50">
            <div className={`grid grid-cols-${size} gap-1`}>{grid.map((elem:any)=>(
                <button key={elem[0]} onClick={()=>handleItemClick(elem[1])}  className={`${selectedItems.includes(elem[1]) ? 'bg-white text-black border-solid animated-border-2' : 'bg-black text-white border-solid animated-border-1'} rounded border-4 rounded-xl p-4 m-1 `}>{elem[1]}</button>
            ))}</div>
        </div> 
    </div>
    );
}
