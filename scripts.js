const api_url = "https://picsum.photos/v2/list?page=1&limit=6";

async function fetchRandomImages() {
    try {
        const response = await fetch(api_url);
        const data = await response.json();

        return data.map(entry => entry.download_url);
    } catch (error) {
        console.error("Error fetching random images:", error);
        return [];
    }
}

async function populateCards() {
    const imageUrls = await fetchRandomImages();

    for (let i = 0; i < imageUrls.length; i++) {
        const card = document.getElementById(`card${i + 1}`);
        card.style.backgroundImage = `url(${imageUrls[i]})`;
        
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
    }
}

// Populate cards when the page loads
window.onload = populateCards;
