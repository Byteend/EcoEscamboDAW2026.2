const navbarRoot = document.getElementById('site-navbar');

if (navbarRoot) {
    navbarRoot.innerHTML = `
        <header class="site-nav">
            <div class="site-nav-inner">
                <a class="site-brand" href="../catalogo/catalogo.html">
                    <span class="site-brand-mark" aria-hidden="true">EE</span>
                    <span>EcoEscambo</span>
                </a>
                <nav class="site-nav-links" aria-label="Navegação principal">
                    <a href="../catalogo/catalogo.html">Catálogo</a>
                    <a href="../meus-produtos/meusProdutos.html">Meus Produtos</a>
                    <a class="site-nav-action" href="../cadastro-produto/cadastrar.html">Anunciar produto</a>
                </nav>
            </div>
        </header>
    `;

    const currentPath = window.location.pathname;
    navbarRoot.querySelectorAll('.site-nav-links a').forEach(link => {
        if (new URL(link.href).pathname === currentPath) {
            link.setAttribute('aria-current', 'page');
        }
    });
}