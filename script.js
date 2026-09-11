function extractInformation() {

    // Get text entered by the user
    const text = document.getElementById("inputText").value;

    // Check if text is empty
    if (text.trim() === "") {
        alert("Please enter some text first!");
        return;
    }


    // ==============================
    // 1. NAME EXTRACTION
    // ==============================

    const nameRegex =
        /(?:my name is|i am|name is)\s+([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)/i;

    const nameMatch = text.match(nameRegex);

    const name = nameMatch
        ? nameMatch[1]
        : "Not detected";


    // ==============================
    // 2. EMAIL EXTRACTION
    // ==============================

    const emailRegex =
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

    const emails = text.match(emailRegex);


    // ==============================
    // 3. PHONE NUMBER EXTRACTION
    // ==============================

    const phoneRegex =
        /(?:\+91[\s-]?)?[6-9]\d{9}/g;

    const phones = text.match(phoneRegex);


    // ==============================
    // 4. DATE EXTRACTION
    // ==============================

    const dateRegex =
        /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/g;

    const dates = text.match(dateRegex);


    // ==============================
    // 5. URL EXTRACTION
    // ==============================

    const urlRegex =
        /https?:\/\/[^\s]+|www\.[^\s]+/gi;

    const urls = text.match(urlRegex);


    // ==============================
    // 6. NUMBER EXTRACTION
    // ==============================

    const numberRegex =
        /\b\d+(?:\.\d+)?\b/g;

    const numbers = text.match(numberRegex);


    // ==============================
    // DISPLAY RESULTS
    // ==============================

    document.getElementById("nameResult").innerText =
        name;

    document.getElementById("emailResult").innerText =
        emails ? emails.join(", ") : "Not detected";

    document.getElementById("phoneResult").innerText =
        phones ? phones.join(", ") : "Not detected";

    document.getElementById("dateResult").innerText =
        dates ? dates.join(", ") : "Not detected";

    document.getElementById("urlResult").innerText =
        urls ? urls.join(", ") : "Not detected";

    document.getElementById("numberResult").innerText =
        numbers ? numbers.join(", ") : "Not detected";
}


// =================================
// CLEAR BUTTON
// =================================

function clearText() {

    document.getElementById("inputText").value = "";

    document.getElementById("nameResult").innerText =
        "Not detected";

    document.getElementById("emailResult").innerText =
        "Not detected";

    document.getElementById("phoneResult").innerText =
        "Not detected";

    document.getElementById("dateResult").innerText =
        "Not detected";

    document.getElementById("urlResult").innerText =
        "Not detected";

    document.getElementById("numberResult").innerText =
        "Not detected";
}