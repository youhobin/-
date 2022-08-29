const number = parseInt(prompt("몇명이 참가하나요?"));

if (number) {
    const $order = document.getElementById("order");
    const textInput = document.getElementById("text");
    const $button = document.getElementById("button");
    const $word = document.getElementById("word");
    let word;
    let newWord;


    function onClickButton() {
        if (!word  || (word[word.length - 1] === newWord[0]&& newWord.length === 3)){
            word = newWord;
            $word.textContent = word;
            textInput.value = "";
            const order = Number($order.textContent);
            if (order + 1 > number) {
                $order.textContent = 1;
            } else {
                $order.textContent = order + 1;
            }
        } else {
            alert("올바르지 않은 단어입니다.");
        }
        textInput.value = "";
        textInput.focus();
    };

    function textWrite(event) {
        newWord = event.target.value;
    };

    textInput.addEventListener("input", textWrite);
    $button.addEventListener("click", onClickButton);
}
