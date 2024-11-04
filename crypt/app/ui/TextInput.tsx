"use client";
import { cleanInput } from '../util/cleaning';
import { Input } from "@/components/ui/input"

type TextInputProps = {
  inputName: string;
  updateFunction: any;
}

export function TextInput({ inputName, updateFunction }: TextInputProps) {

  function updateCiphertext(e: any) {
    const value: string = e.target.value
    const cleaned: string = cleanInput(value);
    updateFunction(cleaned)
  }

  return (
    <div className="w-128 h-10 flex gap-2 items-center">
      <p>{inputName}:</p>
        <Input name="ciphertextInput" className="bg-black" onChange={updateCiphertext}/>
      </div>
  );
}
