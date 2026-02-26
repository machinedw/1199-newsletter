// ===================================
// 1199 NEWSLETTER APP - ANDROID OPTIMIZED
// Navigation, Menu, Progress Tracking
// ===================================

class NewsletterApp {
    constructor() {
        this.currentPage = 1;
        this.totalPages = LESSONS.length;
        this.isAnimating = false;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.menuOpen = false;
        
        this.init();
    }

    init() {
        // Load saved progress
        const saved = localStorage.getItem('newsletter-progress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.currentPage = progress.page || 1;
        }

        // Cache DOM elements
        this.navLeft = document.getElementById('nav-left');
        this.navRight = document.getElementById('nav-right');
        this.lessonText = document.getElementById('lesson-text');
        this.lessonImage = document.getElementById('lesson-image');
        this.chapterInfo = document.getElementById('chapter-info');
        this.progressBar = document.getElementById('progress-bar');
        this.lessonContainer = document.getElementById('lesson-container');
        this.menuBtn = document.getElementById('menu-btn');
        this.menuCloseBtn = document.getElementById('menu-close-btn');
        this.chapterMenu = document.getElementById('chapter-menu');
        this.menuOverlay = document.getElementById('menu-overlay');
        this.chapterList = document.getElementById('chapter-list');

        // Render initial state
        this.renderLesson();
        this.updateProgress();
        this.renderChapterMenu();

        // Attach event listeners
        this.attachListeners();

        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js')
                .then(() => console.log('Service Worker registered'))
                .catch(err => console.log('Service Worker registration failed:', err));
        }
    }

    attachListeners() {
        // Navigation zones
        this.navLeft.addEventListener('click', () => this.prevPage());
        this.navRight.addEventListener('click', () => this.nextPage());

        // Touch swipe navigation
        this.lessonContainer.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.touchStartY = e.touches[0].clientY;
        });

        this.lessonContainer.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const deltaX = touchEndX - this.touchStartX;
            const deltaY = touchEndY - this.touchStartY;

            // Only trigger swipe if horizontal movement is greater than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.prevPage();
                } else {
                    this.nextPage();
                }
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.menuOpen) return;
            if (e.key === 'ArrowLeft') this.prevPage();
            if (e.key === 'ArrowRight') this.nextPage();
        });

        // Menu controls
        this.menuBtn.addEventListener('click', () => this.openMenu());
        this.menuCloseBtn.addEventListener('click', () => this.closeMenu());
        this.menuOverlay.addEventListener('click', () => this.closeMenu());
    }

    renderLesson() {
        if (this.isAnimating) return;

        const lesson = getLessonByPage(this.currentPage);
        if (!lesson) return;

        this.isAnimating = true;

        // Fade out
        this.lessonContainer.classList.add('fade-out');

        setTimeout(() => {
            // Scroll to top of page
            const appContainer = document.getElementById('app-container');
            if (appContainer) {
                appContainer.scrollTop = 0;
            }
            // Also scroll window to top
            window.scrollTo(0, 0);

            // Update content
            this.lessonText.textContent = lesson.text;
            this.lessonImage.src = lesson.image;
            this.lessonImage.alt = lesson.title;

            // Fade in
            this.lessonContainer.classList.remove('fade-out');
            this.lessonContainer.classList.add('fade-in');

            setTimeout(() => {
                this.lessonContainer.classList.remove('fade-in');
                this.isAnimating = false;
            }, 400);
        }, 300);

        // Save progress
        this.saveProgress();
    }

    updateProgress() {
        const lesson = getLessonByPage(this.currentPage);
        if (!lesson) return;

        const chapterInfo = getChapterInfo(this.currentPage);
        if (!chapterInfo) return;

        // Update progress bar
        const progressPercent = ((chapterInfo.pageInChapter - 1) / (chapterInfo.totalPagesInChapter - 1)) * 100;
        this.progressBar.style.width = `${progressPercent}%`;

        // Update chapter info text
        this.chapterInfo.textContent = `${chapterInfo.chapterName} • Page ${chapterInfo.pageInChapter} of ${chapterInfo.totalPagesInChapter}`;
    }

    nextPage() {
        if (this.isAnimating || this.menuOpen) return;
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.renderLesson();
            this.updateProgress();
        }
    }

    prevPage() {
        if (this.isAnimating || this.menuOpen) return;
        if (this.currentPage > 1) {
            this.currentPage--;
            this.renderLesson();
            this.updateProgress();
        }
    }

    goToPage(page) {
        if (this.isAnimating) return;
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.renderLesson();
            this.updateProgress();
            this.closeMenu();
        }
    }

    saveProgress() {
        localStorage.setItem('newsletter-progress', JSON.stringify({
            page: this.currentPage,
            timestamp: Date.now()
        }));
    }

    renderChapterMenu() {
        this.chapterList.innerHTML = '';

        CHAPTERS.forEach(chapter => {
            const item = document.createElement('div');
            item.className = 'chapter-item';
            
            // Check if current page is in this chapter
            const chapterInfo = getChapterInfo(this.currentPage);
            if (chapterInfo && chapterInfo.chapterId === chapter.id) {
                item.classList.add('active');
            }

            const title = document.createElement('div');
            title.className = 'chapter-item-title';
            title.textContent = chapter.name;

            const pages = document.createElement('div');
            pages.className = 'chapter-item-pages';
            pages.textContent = `${chapter.pages} page${chapter.pages > 1 ? 's' : ''}`;

            item.appendChild(title);
            item.appendChild(pages);

            item.addEventListener('click', () => {
                // Navigate to first page of this chapter
                let cumulativePages = 0;
                for (let c of CHAPTERS) {
                    if (c.id === chapter.id) {
                        this.goToPage(cumulativePages + 1);
                        break;
                    }
                    cumulativePages += c.pages;
                }
            });

            this.chapterList.appendChild(item);
        });
    }

    openMenu() {
        this.menuOpen = true;
        this.chapterMenu.classList.add('active');
        this.menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeMenu() {
        this.menuOpen = false;
        this.chapterMenu.classList.remove('active');
        this.menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new NewsletterApp();
    });
} else {
    window.app = new NewsletterApp();
}
