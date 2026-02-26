// 1199SEIU Newsletter App - Main App Logic
// Optimized for iPhone and Android

class NewsletterApp {
    constructor() {
        this.currentPage = this.loadProgress();
        this.isAnimating = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.menuOpen = false;
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.renderLesson();
        this.attachEventListeners();
        this.updateProgress();
        this.renderChapterMenu();
    }

    cacheElements() {
        this.navLeft = document.getElementById('nav-left');
        this.navRight = document.getElementById('nav-right');
        this.lessonText = document.getElementById('lesson-text');
        this.lessonImage = document.getElementById('lesson-image');
        this.chapterInfo = document.getElementById('chapter-info');
        this.progressBar = document.getElementById('progress-bar');
        this.lessonContainer = document.getElementById('lesson-container');
        this.menuButton = document.getElementById('menu-button');
        this.chapterMenu = document.getElementById('chapter-menu');
        this.menuOverlay = document.getElementById('chapter-menu-overlay');
        this.headerTitle = document.getElementById('header-title');
    }

    attachEventListeners() {
        // Tap navigation
        this.navLeft.addEventListener('click', () => this.previousPage());
        this.navRight.addEventListener('click', () => this.nextPage());

        // Menu toggle
        this.menuButton.addEventListener('click', () => this.toggleMenu());
        this.menuOverlay.addEventListener('click', () => this.closeMenu());

        // Swipe gestures
        this.lessonContainer.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.lessonContainer.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousPage();
            if (e.key === 'ArrowRight') this.nextPage();
        });

        // Prevent image dragging
        this.lessonImage.addEventListener('dragstart', (e) => e.preventDefault());
    }

    renderChapterMenu() {
        const menuHTML = CHAPTERS.map(chapter => {
            const startDay = this.getChapterStartDay(chapter.id);
            const isActive = this.isInChapter(chapter.id);
            return `
                <div class="chapter-item ${isActive ? 'active' : ''}" data-chapter="${chapter.id}">
                    <div class="chapter-item-title">Chapter ${chapter.id}: ${chapter.name}</div>
                    <div class="chapter-item-subtitle">Pages ${startDay}-${startDay + chapter.days - 1}</div>
                </div>
            `;
        }).join('');

        this.chapterMenu.innerHTML = menuHTML;

        // Add click handlers
        document.querySelectorAll('.chapter-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const chapterId = parseInt(e.currentTarget.dataset.chapter);
                this.jumpToChapter(chapterId);
            });
        });
    }

    getChapterStartDay(chapterId) {
        let day = 1;
        for (let i = 0; i < chapterId - 1; i++) {
            day += CHAPTERS[i].days;
        }
        return day;
    }

    isInChapter(chapterId) {
        const chapterInfo = getChapterInfo(this.currentPage);
        return chapterInfo && chapterInfo.chapterId === chapterId;
    }

    jumpToChapter(chapterId) {
        const startDay = this.getChapterStartDay(chapterId);
        this.currentPage = startDay;
        this.saveProgress();
        this.transitionLesson();
        this.closeMenu();
        this.renderChapterMenu();
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
            this.chapterMenu.classList.add('open');
            this.menuOverlay.classList.add('open');
        } else {
            this.closeMenu();
        }
    }

    closeMenu() {
        this.menuOpen = false;
        this.chapterMenu.classList.remove('open');
        this.menuOverlay.classList.remove('open');
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextPage();
            } else {
                this.previousPage();
            }
        }
    }

    nextPage() {
        if (this.isAnimating) return;
        if (this.currentPage < LESSONS.length) {
            this.currentPage++;
            this.saveProgress();
            this.transitionLesson();
            this.renderChapterMenu();
        }
    }

    previousPage() {
        if (this.isAnimating) return;
        if (this.currentPage > 1) {
            this.currentPage--;
            this.saveProgress();
            this.transitionLesson();
            this.renderChapterMenu();
        }
    }

    transitionLesson() {
        this.isAnimating = true;
        
        this.lessonText.style.animation = 'fadeOut 0.3s ease forwards';
        this.lessonImage.parentElement.style.animation = 'fadeOut 0.3s ease forwards';

        setTimeout(() => {
            this.renderLesson();
            this.updateProgress();
            
            this.lessonText.style.animation = 'fadeInUp 0.6s ease forwards';
            this.lessonImage.parentElement.style.animation = 'fadeInScale 0.6s ease 0.2s forwards';
            
            setTimeout(() => {
                this.isAnimating = false;
            }, 600);
        }, 300);
    }

    renderLesson() {
        const lesson = getLessonByDay(this.currentPage);
        this.lessonText.textContent = lesson.text;
        this.lessonImage.src = lesson.image;
        this.lessonImage.alt = `Page ${lesson.day}: ${lesson.title}`;
        
        const chapterInfo = getChapterInfo(this.currentPage);
        if (chapterInfo) {
            this.headerTitle.textContent = `Page ${this.currentPage} of ${LESSONS.length}`;
        }
    }

    updateProgress() {
        const chapterInfo = getChapterInfo(this.currentPage);
        
        if (chapterInfo) {
            this.chapterInfo.textContent = 
                `Chapter ${chapterInfo.chapterId}: ${chapterInfo.chapterName} • Page ${chapterInfo.dayInChapter} of ${chapterInfo.totalDaysInChapter}`;
            
            const progress = (chapterInfo.dayInChapter / chapterInfo.totalDaysInChapter) * 100;
            this.progressBar.style.width = `${progress}%`;
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('1199_newsletter_page', this.currentPage.toString());
        } catch (e) {
            console.error('Failed to save progress:', e);
        }
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('1199_newsletter_page');
            return saved ? parseInt(saved, 10) : 1;
        } catch (e) {
            console.error('Failed to load progress:', e);
            return 1;
        }
    }
}

// Initialize app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new NewsletterApp();
    });
} else {
    new NewsletterApp();
}

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/1199-newsletter-jan-2026/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}