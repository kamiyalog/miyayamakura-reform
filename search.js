/*
==================================================
    SEARCH SYSTEM
==================================================
*/

(function () {

    /*
    ==============================================
        Normalize
    ==============================================
    */

    function normalize(text) {
        return String(text || "")
            .trim()
            .replace(/\s+/g, "")
            .replace(/　+/g, "")
            .toLowerCase();
    }

    /*
    ==============================================
        Search Dictionary
    ==============================================
    */

    const pages = [

        {
            page: "index.html",
            keywords: [
                "ホーム",
                "宮真倉リフォーム",
                "ミヤマクラリフォーム"
            ]
        },

        {
            page: "about.html",
            keywords: [
                "宮真倉リフォームとは",
                "会社概要",
                "会社案内"
            ]
        },

        {
            page: "works.html",
            keywords: [
                "施工事例",
                "リフォーム事例"
            ]
        },

        {
            page: "staff.html",
            keywords: [
                "スタッフ",
                "スタッフ紹介",

            ]
        },

        {
            page: "voice.html",
            keywords: [
                "お客様の声",
                "口コミ",
                "評判"
            ]
        },

        {
            page: "news.html",
            keywords: [
                "お知らせ",
                "宮真倉通信"
            ]
        },

        {
            page: "contact.html",
            keywords: [
                "問い合わせ",
                "お問い合わせ",
                "リフォームの相談",
                "相談"
            ]
        },

        /*
        ------------------------------------------
            News Articles
        ------------------------------------------
        */

        {
            page: "news105.html",
            keywords: ["宮真倉通信105"]
        },
        {
            page: "news104.html",
            keywords: ["宮真倉通信104"]
        },
        {
            page: "news103.html",
            keywords: ["宮真倉通信103"]
        },
        {
            page: "news102.html",
            keywords: ["宮真倉通信102"]
        },
        {
            page: "news101.html",
            keywords: ["宮真倉通信101"]
        },
        {
            page: "news100.html",
            keywords: [
                "宮真倉通信100"]
        },
        {
            page: "news99.html",
            keywords: ["宮真倉通信99"]
        },
        {
            page: "news98.html",
            keywords: ["宮真倉通信98"]
        },

        /*
        ------------------------------------------
            Hidden / ARG Pages
        ------------------------------------------
        */

        {
            page: "accident.html",
            keywords: [
                "宮真倉礼子",
                "宮真倉 礼子",
                "事故",
                "高速道路事故"
            ]
        },

        {
            page: "yuji.html",
            keywords: [
                "宮真倉雄二",
                "宮真倉 雄二"
            ]
        },

        {
            page: "material01.html",
            keywords: [
                "特殊素材",
                "特殊素材作成方法",
            ]
        },

        {
            page: "material02.html",
            keywords: [
                "分離"
            ]
        },

        {
            page: "material03.html",
            keywords: [
                "合成"
            ]
        },

        {
            page: "material04.html",
            keywords: [
                "加工"
            ]
        },

        {
            page: "processing.html",
            keywords: [
                "加工部"
            ]
        },

        {
            page: "takahashi.html",
            keywords: [
                "高橋和美",
                "高橋 和美"
            ]
        },

        {
            page: "kukijo.html",
            keywords: [
                "九木城温泉"
            ]
        },

        {
            page: "motoyoshi.html",
            keywords: [
                "大内元義",
                "大内 元義"
            ]
        },

        {
            page: "treatment.html",
            keywords: [
                "大内礼子",
                "大内 礼子",
                "特別施術"
            ]
        },

        {
            page: "procedure.html",
            keywords: [
                "処置室",
            ]
        },

        {
            page: "status.html",
            keywords: [
                "処置状況確認",
                "現在の制作状況"
            ]
        },

        {
            page: "transport.html",
            keywords: [
                "加工部員輸送課",
                "輸送課"
            ]
        },

        {
            page: "yoriko.html",
            keywords: [
                "大内頼子",
                "大内 頼子"
            ]
        },

        {
            page: "yuki.html",
            keywords: [
                "宮真倉有希",
                "宮真倉 有希",
                "有希"
            ]
        }

    ];

    /*
    ==============================================
        UI Helpers
    ==============================================
    */

    function showError(errorElement, message) {
        if (!errorElement) return;

        errorElement.textContent = message;
        errorElement.classList.add("show");
    }

    function clearError(errorElement) {
        if (!errorElement) return;

        errorElement.textContent = "";
        errorElement.classList.remove("show");
    }

    /*
    ==============================================
        Search
    ==============================================
    */

    function findPage(keyword) {
        const normalizedKeyword = normalize(keyword);

        for (const item of pages) {
            for (const word of item.keywords) {
                if (normalize(word) === normalizedKeyword) {
                    return item.page;
                }
            }
        }

        return null;
    }

    /*
    ==============================================
        Init
    ==============================================
    */

    function initSearch() {
        const form = document.getElementById("searchForm");
        const input = document.getElementById("searchInput");
        const error = document.getElementById("searchError");

        if (!form || !input) return;

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            clearError(error);

            const keyword = input.value;
            const normalizedKeyword = normalize(keyword);

            if (normalizedKeyword === "") {
                showError(error, "検索ワードを入力してください。");
                return;
            }

            const page = findPage(keyword);

            if (page) {
                window.location.href = page;
                return;
            }

            showError(error, "検索結果が見つかりませんでした。");
        });

        input.addEventListener("input", function () {
            clearError(error);
        });
    }

    /*
    ==============================================
        Wait for include.js
    ==============================================
    */

    function waitForHeader() {
        const header = document.getElementById("header");

        if (!header) {
            initSearch();
            return;
        }

        const alreadyLoaded = document.getElementById("searchForm");

        if (alreadyLoaded) {
            initSearch();
            return;
        }

        const observer = new MutationObserver(function () {
            if (document.getElementById("searchForm")) {
                observer.disconnect();
                initSearch();
            }
        });

        observer.observe(header, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", waitForHeader);
    } else {
        waitForHeader();
    }

})();