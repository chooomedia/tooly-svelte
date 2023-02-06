if (document.querySelector("#bubble")) {
    const addLogoAnimationTags = () => {
        let speechBubble = document.querySelector("#bubble");
        let toolyTool = document.querySelector("#tool");
        let sessionStorageKey = 'sessionStorageKey';

        if (!sessionStorage.getItem(sessionStorageKey)) {
            sessionStorage.setItem(sessionStorageKey, 'true');

            toolyTool.style.animationName = "expand-bounce";
            toolyTool.style.animationDuration = "1.2s";
            speechBubble.style.animationName = "expand-bounce";
            speechBubble.style.animationDuration = "1.2s";

            setTimeout(function () {
                toolyTool.style.animationName = "shrink";
                toolyTool.style.animationDuration = "0.9s";
                speechBubble.style.animationName = "shrink";
                speechBubble.style.animationDuration = "0.9s";
            }, 1200);
        }
    };
    document.addEventListener("DOMContentLoaded", function () {
        addLogoAnimationTags();
    });
}

if (document.querySelector("form")) {
    const replaceLabelContent = () => {
        const selector = "#main-content .et_pb_newsletter_form form .et_pb_newsletter_fields .et_pb_newsletter_field > span > label";
        const newContent = `<i></i>Ich habe die Bestimmungen zum Datenschutz gelesen und bin damit einverstanden * <b><u><a href='#datenschutz-erklaerung' title='DatenschutzerklÃ¤rung Ã¶ffnen'>Datenschutz anzeigen</u></b></a>`;
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.innerHTML = newContent;
        });

    };
    document.addEventListener("DOMContentLoaded", function () {
        replaceLabelContent();
    });
}