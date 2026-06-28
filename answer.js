document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("answerForm");
    const overlay = document.getElementById("checkingOverlay");

    if (!form || !overlay) return;

    const normalize = function (value) {
        return value
            .trim()
            .replace(/\s+/g, "")
            .replace(/　+/g, "")
            .toLowerCase();
    };

    const answers = {
        q1: [
            "宮真倉雄二"
        ],
        q2: [
            "加工部",
            "加工部員輸送課"
        ],
        q3: [
            "大内礼子"
        ],
        q4: [
            "宮真倉有希"
        ],
        q5: [
            "有希のからだ",
            "有希の体",
            "有希の身体",
            "有希のドール",
            "ゆきのからだ",
            "ゆきの体",
            "ゆきの身体",
            "ゆきのドール"
        ]
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const q1 = normalize(document.getElementById("q1").value);
        const q2 = normalize(document.getElementById("q2").value);
        const q3 = normalize(document.getElementById("q3").value);
        const q4 = normalize(document.getElementById("q4").value);
        const q5 = normalize(document.getElementById("q5").value);

        const isCorrect =
            answers.q1.map(normalize).includes(q1) &&
            answers.q2.map(normalize).includes(q2) &&
            answers.q3.map(normalize).includes(q3) &&
            answers.q4.map(normalize).includes(q4) &&
            answers.q5.map(normalize).includes(q5);

        overlay.classList.add("show");

        setTimeout(function () {
            if (isCorrect) {
                window.location.href = "good.html";
            } else {
                window.location.href = "bad.html";
            }
        }, 2000);
    });
});