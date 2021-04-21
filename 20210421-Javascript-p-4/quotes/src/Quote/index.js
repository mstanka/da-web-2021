import './styles.css';

const Quote = (props) => {
  return `
    <main>
      <h1>${props.text}</h1>
      <quote>${props.author}</quote>
    </main>  
  `;
};

export default Quote;
