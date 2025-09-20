// Page Loading State Manager
// Tracks which pages have been loaded before to skip loaders on subsequent visits

class PageLoadingManager {
  constructor() {
    this.loadedPages = new Set();
    this.loadFromStorage();
  }

  /**
   * Check if a page has been loaded before
   * @param {string} pageKey - Unique identifier for the page
   * @returns {boolean} - Whether the page has been loaded before
   */
  hasPageBeenLoaded(pageKey) {
    return this.loadedPages.has(pageKey);
  }

  /**
   * Mark a page as loaded
   * @param {string} pageKey - Unique identifier for the page
   */
  markPageAsLoaded(pageKey) {
    this.loadedPages.add(pageKey);
    this.saveToStorage();
  }

  /**
   * Load state from localStorage
   */
  loadFromStorage() {
    try {
      const stored = localStorage.getItem('portfolio_loaded_pages');
      if (stored) {
        const pages = JSON.parse(stored);
        this.loadedPages = new Set(pages);
      }
    } catch (error) {
      console.warn('Failed to load page state from localStorage:', error);
    }
  }

  /**
   * Save state to localStorage
   */
  saveToStorage() {
    try {
      const pages = Array.from(this.loadedPages);
      localStorage.setItem('portfolio_loaded_pages', JSON.stringify(pages));
    } catch (error) {
      console.warn('Failed to save page state to localStorage:', error);
    }
  }

  /**
   * Clear all loaded pages (useful for testing)
   */
  clearLoadedPages() {
    this.loadedPages.clear();
    localStorage.removeItem('portfolio_loaded_pages');
  }

  /**
   * Get all loaded page keys
   * @returns {Array} - Array of loaded page keys
   */
  getLoadedPages() {
    return Array.from(this.loadedPages);
  }
}

// Create a singleton instance
const pageManager = new PageLoadingManager();

export default pageManager;
