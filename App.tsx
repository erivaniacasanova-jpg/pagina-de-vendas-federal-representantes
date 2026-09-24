useEffect(() => {
    // 1. Identifica o nome do representante direto pela URL (converte para minúsculo e remove barras extras)
    const pathName = window.location.pathname.replace(/^\/+/g, '').toLowerCase().trim();

    if (pathName && REPRESENTANTES[pathName]) {
      setRepresentante(REPRESENTANTES[pathName]);
    }

    // 2. Trata navegação por Hash na página
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
