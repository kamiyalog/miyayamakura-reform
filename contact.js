document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const result = document.getElementById("formResult");

    if (!form || !result) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const child = document.getElementById("child").value;
        const childGender = document.getElementById("childGender").value;
        const childAge = document.getElementById("childAge").value;

        result.className = "form-result show";

        if (child === "あり" && childGender === "女の子" && childAge === "18") {
            result.classList.add("success");
            result.innerHTML = `
                <p>
                    <strong>おめでとうございます！</strong><br>
                    九木城温泉のご招待が決定しました！<br>
                    詳細につきましては、後日担当者よりご案内いたします。
                </p>
            `;
        } else {
            result.classList.add("normal");
            result.innerHTML = `
                <p>
                    お問い合わせありがとうございます。<br>
                    内容を確認のうえ、追って担当者よりご連絡いたします。
                </p>
            `;
        }

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});