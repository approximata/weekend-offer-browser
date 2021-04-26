import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
      <div>
          <h1 className={headerStyles.title}>
              <span>Weekend</span> offers
          </h1>
          <p className={headerStyles.description}>
              Check the latest offers for the weekend{' '}
          </p>
      </div>
  );
}

export default Header
