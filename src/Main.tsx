import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import "./Main.css"
import { ConversationDto } from "./ChatService";
import { useState } from "preact/hooks";

export function Main() {

    let [selected, setSelected] = useState<ConversationDto>()
    let classExtra = selected === undefined ? "left" : "right"

    return <div class={`Main ${classExtra}`}>
        <LeftPane selected={selected} onSelect={setSelected}/>
        <RightPane conversation={selected} onBack={() => setSelected(undefined)}/>
    </div>
}