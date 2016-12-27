const Observable = Rx.Observable;

const state = {
    
}
const optionList = [
    { name: 'Pizza', votes: 0 }
];

const options = document.querySelector('#options');
const input = document.querySelector('#input');
const button = document.querySelector('#submit');

// Text Input
const input$ = Observable.fromEvent(input, 'keyup')
    .map(ev => ev.target.value);

// Submission
const submitButton$ = Observable.fromEvent(button, 'click');
const enterKey$ = Observable.fromEvent(input, 'keyup')
    .filter(ev => ev.keyCode === 13);
const submit$ = Observable.merge(submitButton$, enterKey$);

const addOption$ = input$
    .takeUntil(submit$)
    .subscribe(x => console.log(x));
