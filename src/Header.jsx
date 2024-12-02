const Header = () => {
  const isAuthenticated = false;

  return (
    <header>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Blog</li>
        </ul>
      </nav>

      {isAuthenticated ? <p>Vous êtes connecté !</p> : <p>Merci de vous connecter</p>}
    </header>
  );
};

export default Header;
