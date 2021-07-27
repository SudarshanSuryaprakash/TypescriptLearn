import {useRef, useState} from "react";

interface Props {
  text: string
  handleChange?: () => void
}

const TextField: React.FC<Props> = ({handleChange}) => {
  const [num, setNum] = useState<number | null>(1)
  //const [num, setNum] = useState<{text: string}>({text: hello})

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <input ref = {inputRef} onChange = {handleChange} />
    </div>
  )
}
export default TextField
