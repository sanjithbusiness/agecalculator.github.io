function calculateAge() {
    const birthDateTimeInput = document.getElementById('birthDateTime').value;
    const birthDateTime = new Date(birthDateTimeInput);
    const now = new Date();

    let years = now.getFullYear() - birthDateTime.getFullYear();
    let months = now.getMonth() - birthDateTime.getMonth();
    let days = now.getDate() - birthDateTime.getDate();
    let hours = now.getHours() - birthDateTime.getHours();
    let seconds = now.getSeconds() - birthDateTime.getSeconds();

    if (months < 0 || days < 0 || hours < 0 || seconds < 0) {
        years--;
        months += 12;
        days += 30;
        hours += 24;
        seconds += 60;
    }

    // Generate the HTML string for the age display
    const ageDisplayHTML = `
    <ul>
        <li>${years} years</li>
        <li>${months} months</li>
        <li>${days} days</li>
        <li>${hours} hours</li>
        <li>${seconds} seconds</li>
    </ul>`;

    // Set the age display HTML
    document.getElementById('ageDisplay').innerHTML = ageDisplayHTML;

    // Display today's date
    const today = new Date();
    const formattedToday = today.toLocaleDateString();
    document.getElementById('todayDate').textContent = formattedToday;
}
