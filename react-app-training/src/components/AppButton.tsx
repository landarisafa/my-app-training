interface AppButtonProps{
    label: string;
    onClick?:(e:any)=>void;
}

export default function AppButton({label,onClick}:AppButtonProps){
    return (
        <button onClick={onClick}>{label}</button>
    )
}