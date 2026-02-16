/* ============================================
   Shared Components — Header Nav + Footer
   ============================================ */
(function () {
    const pages = [
        { name: 'Home', href: 'index.html' },
        { name: 'Research', href: 'research.html' },
        { name: 'Publications', href: 'publications.html' },
        { name: 'Projects', href: 'projects.html' },
        { name: 'Contact', href: 'contact.html' },
    ];

    // Detect active page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Build nav links
    const navLinks = pages
        .map(p => {
            const isActive = currentPath === p.href;
            return `<li><a href="${p.href}"${isActive ? ' class="active"' : ''}>${p.name}</a></li>`;
        })
        .join('\n');

    // Inject header
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="container">
            <div class="header-content">
                <div class="header-left">
                    <h1>Shivani Tuli</h1>
                    <p>Research Associate, Harvard University &amp; University of Pittsburgh</p>
                </div>
                <nav>
                    <ul>
                        ${navLinks}
                    </ul>
                </nav>
            </div>
        </div>
    `;
    document.body.prepend(header);

    // Inject footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            &copy; ${new Date().getFullYear()} Shivani Tuli
        </div>
    `;
    document.body.appendChild(footer);
})();
