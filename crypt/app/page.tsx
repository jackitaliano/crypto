"use client";
import { useState } from "react";
import { CaesarShift, FrequencyAnalysis, Selecter, TextInput, Vigenere } from "./ui";
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
    },
    {
      value: "vigenere",
      display: "Vigenere Cipher"
    }
  ]

  const [selectedOption, setSelectedOption] = useState("vigenere");
  const [ciphertext, setCiphertext] = useState("");

  function setOption(value: string) {
    setSelectedOption(value);
  }

  function updateCiphertext(value: string) {
    setCiphertext(value);
  }

  return (
    <div className="font-[family-name:monospace] p-8 w-screen h-screen overflow-x-hidden">

      <div className="w-full h-16 p-8 flex mb-8">
        <div className="w-full h-full">
          <Selecter placeholder={options[0].display} options={options} updateOption={setOption}/>
        </div>
        <div className="w-full h-full">
          <TextInput inputName="Ciphertext" updateFunction={updateCiphertext} />
        </div>
      </div>
      <div className={selectedOption == "caesar" ? "block" : "hidden"}>
        <CaesarShift ciphertext={ciphertext}/>
      </div>
      <div className={selectedOption == "frequency" ? "block" : "hidden"}>
        <FrequencyAnalysis alphabet={ENGLISH} ciphertext={ciphertext}/>
      </div>
      <div className={selectedOption == "vigenere" ? "block" : "hidden"}>
        <Vigenere alphabet={ENGLISH} ciphertext={ciphertext}/>
      </div>
    </div>
  );
}
