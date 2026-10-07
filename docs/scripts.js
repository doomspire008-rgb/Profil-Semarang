document.addEventListener('DOMContentLoaded', () => {
    const siteHeader = document.querySelector('.site-header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const imageViewer = document.querySelector('.image-viewer');
    const imageViewerImage = document.querySelector('.image-viewer-image');
    const imageViewerCaption = document.querySelector('.image-viewer-caption');
    const imageViewerClose = document.querySelector('.image-viewer-close');

    if (siteHeader) {
        const updateHeaderOnScroll = () => {
            const scrollPosition = window.scrollY;
            const isCompact = siteHeader.classList.contains('is-scrolled');

            if (!isCompact && scrollPosition > 120) {
                siteHeader.classList.add('is-scrolled');
            } else if (isCompact && scrollPosition < 20) {
                siteHeader.classList.remove('is-scrolled');
            }
        };

        updateHeaderOnScroll();
        window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
    }

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('is-open');
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
            mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (mainNav && mobileMenuBtn) {
                mainNav.classList.remove('is-open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.setAttribute('aria-label', 'Buka navigasi');
            }

            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    if (imageViewer && imageViewerImage && imageViewerCaption && imageViewerClose) {
        const openImageViewer = image => {
            const imageDescription = image.alt || 'Foto Semarang';
            imageViewerImage.src = image.currentSrc || image.src;
            imageViewerImage.alt = imageDescription;
            imageViewerCaption.textContent = imageDescription;
            imageViewer.showModal();
        };

        document.querySelectorAll('.main-content img').forEach(image => {
            image.tabIndex = 0;
            image.setAttribute('role', 'button');
            image.setAttribute('aria-label', `Buka foto ukuran penuh: ${image.alt || 'Foto Semarang'}`);
            image.addEventListener('click', () => openImageViewer(image));
            image.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openImageViewer(image);
                }
            });
        });

        imageViewerClose.addEventListener('click', () => imageViewer.close());
        imageViewer.addEventListener('click', event => {
            if (event.target === imageViewer) {
                imageViewer.close();
            }
        });
    }
});