document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-copy').forEach((btn) => {
        btn.addEventListener('click', () => {
            const target = document.getElementById(btn.getAttribute('data-target'));
            if (!target) return;
            navigator.clipboard.writeText(target.innerText).then(() => {
                btn.textContent = '✓ Copied';
                setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
            });
        });
    });
});
