function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (!day || !month || !year) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - year;
    const birthMonth = month - 1;

    if (
        today.getMonth() < birthMonth ||
        (today.getMonth() === birthMonth && today.getDate() < day)
    ) {
        age--;
    }

    document.getElementById("result").innerText = `Your age is ${age} years.`;
}
