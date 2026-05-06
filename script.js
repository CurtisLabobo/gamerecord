// Your game highlights - Edit this data directly in the code!
// To add more games, just add new objects to this array
const gameHighlights = [
    {
        opponent: "aaryrajsingh",
        rating: 1489,
        format: "rapid",
        date: "2024-05-05",
        link: "https://www.chess.com/analysis/game/live/168300004254/review"
    }
];

class GameHighlightsManager {
    constructor() {
        this.initializeEventListeners();
        this.renderGames(gameHighlights);
        this.updateStats();
    }

    initializeEventListeners() {
        document.getElementById('searchInput').addEventListener('input', () => this.filterGames());
    }

    filterGames() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();

        const filtered = gameHighlights.filter(game => {
            const matchesSearch = game.opponent.toLowerCase().includes(searchTerm) ||
                                game.link.includes(searchTerm);

            return matchesSearch;
        });

        this.renderGames(filtered);
    }

    renderGames(games) {
        const tbody = document.getElementById('gamesBody');
        const emptyState = document.getElementById('emptyState');

        if (games.length === 0) {
            tbody.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        tbody.innerHTML = games.map(game => this.createTableRow(game)).join('');
    }

    createTableRow(game) {
        const date = new Date(game.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        return `
            <tr>
                <td class="opponent-cell">${this.escapeHtml(game.opponent)}</td>
                <td class="rating-cell">${game.rating}</td>
                <td>
                    <span class="format-badge">
                        ${game.format.charAt(0).toUpperCase() + game.format.slice(1)}
                    </span>
                </td>
                <td class="date-cell">${formattedDate}</td>
                <td>
                    <a href="${game.link}" target="_blank" title="View on Chess.com">
                        View Game ↗
                    </a>
                </td>
            </tr>
        `;
    }

    updateStats() {
        // Stats section removed
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new GameHighlightsManager();
});
