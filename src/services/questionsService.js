export function getArithmeticQuestions() {
    fetch('/questions/arithmetic.json')
    .then(res => console.log(res.json()))
}