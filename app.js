import './App.css';
import Book from './Book'
import Loader from './Loader'
import Content from './Content.js';

function App(props) {
  const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae atque amet laborum. Molestiae voluptas minus eligendi eius architecto quo esse aut aperiam rerum iste expedita ducimus, perferendis est velit iusto reprehenderit ut, praesentium nostrum sint quidem odio, blanditiis accusamus ipsa.";



  return props.isLoading ? (
     <Loader />
     ):( 
  <div>
    <Book
     name="BBC News"
      extra="2020"
      text="Jasurbek Saribayev"
      header="Big Job"
    >Extra informationlar </Book>
    <Content descr={description} />
  </div>
  )
}

export default App;
