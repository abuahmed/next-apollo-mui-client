import { Dispatch, SetStateAction } from "react";

const phrases: string[] = [
    'Modern',
    'Mobile Responsive',
    'Fast and Efficient',
    'User Friendly',
    'Installable',
];
let i = 0;
let j = 0;
let currentPhrase: string[] = [];
let isDeleting = false;
let isEnd = false;


interface IProps {
    setText: Dispatch<SetStateAction<string>>;
}
export default function loop({ setText }: IProps) {
    isEnd = false;
    //textDisplay.innerHTML = currentPhrase.join('');
    setText(currentPhrase.join(''));
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            //textDisplay.innerHTML = currentPhrase.join('');
            setText(currentPhrase.join(''));
        }

        if (isDeleting && j > 0) {
            currentPhrase.pop(); //phrases[i][j]
            j--;
            //textDisplay.innerHTML = currentPhrase.join('');
            setText(currentPhrase.join(''));
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }
    const spedUp = 50;
    const normalSpeed = 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}