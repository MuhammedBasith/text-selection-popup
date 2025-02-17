// Function to show popup when text is selected
function showPopup(event) {
    let selectedText = window.getSelection().toString(); // Get the selected text
    const chatPopup = document.getElementById('chat-popup'); // Get the chat popup element

    // Only show popup if there is selected text
    if (selectedText.length > 0) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();  // Get the position of the selection

        // Position the popup above the selected text by default
        let topPosition = rect.top + window.scrollY - 40;

        // If the popup is going off the screen, move it below the selection
        if (topPosition < 0) {
            topPosition = rect.bottom + window.scrollY + 10; // 10px below the selected text
        }

        // Center the popup horizontally relative to the selection
        chatPopup.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (chatPopup.offsetWidth / 2)}px`;
        chatPopup.style.top = `${topPosition}px`;

        chatPopup.style.display = 'block';  // Show the popup
    } else {
        chatPopup.style.display = 'none';  // Hide the popup if no text is selected
    }
}

// Mouseup event for desktop
document.addEventListener('mouseup', showPopup);

// Touchend event for mobile devices
document.addEventListener('touchend', showPopup);

// Handle click on the popup button
document.getElementById('chat-popup').addEventListener('click', function() {
    alert('Chat button clicked!');
});
