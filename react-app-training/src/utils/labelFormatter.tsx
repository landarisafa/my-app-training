export default function labelFormatter(label: string){
    return label
    .split('')
    .map((word)=>word[0].toUpperCase + word.substring(1).toLocaleLowerCase())
    .join(' ');
}