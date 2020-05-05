import React from 'react';

const SearchForm = ({ setSearchTerm }) => {
  const searchRef = React.useRef('');

  React.useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searchRef.current.value);
  };

  return (
    <section className='section'>
      <h2 className='section-title'>Search Cocktails</h2>
      <form className='form search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchRef}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
