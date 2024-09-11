"use client";
import { useState } from "react";
import { CaesarShift, FrequencyAnalysis, Selecter, TextInput } from "./ui";
import { ENGLISH } from "./util/alphabets";

export default function App() {
  const options = [
    {
      value: "caesar",
      display: "Caesar Shifts"
    },
    {
      value: "frequency",
      display: "Frequency Analysis"
    }
  ]

  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [ciphertext, setCiphertext] = useState("");

  function setOption(value: string) {
    console.log("set option: ", value)
    setSelectedOption(value);
  }

  function updateCiphertext(value: string) {
    console.log("update cipher")
    setCiphertext(value);
  }

  return (
    <div className="font-[family-name:monospace] p-8 w-screen h-screen overflow-x-hidden">

      <div className="w-full h-16 p-8 flex">
        <div className="w-full h-full">
          <Selecter placeholder={options[0].display} options={options} updateOption={setOption}/>
        </div>
        <div className="w-full h-full">
          <TextInput inputName="Ciphertext" updateFunction={updateCiphertext} />
        </div>
      </div>
      { 
        selectedOption == "caesar" ? 
        <CaesarShift ciphertext={ciphertext}/>
        : ""
      }
      <div className={selectedOption == "frequency" ? "block" : "hidden"}>
        <FrequencyAnalysis alphabet={ENGLISH} ciphertext={ciphertext}/>
      </div>
    </div>
  );
}
