import "./IconButton.css"

export type IconButtonProps = {
    name?: string;
    text?: string;
    onClick?: () => void;
};

export function IconButton({ name, text, onClick }: IconButtonProps) {
    return <button onClick={onClick}><span class="material-symbols-outlined">
        {name}
    </span> {text}

    </button>
}