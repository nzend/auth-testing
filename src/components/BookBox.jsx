import { Route, Routes } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
import RolesRoute from "./RolesRoute";
import SecretBooks from "./SecretBooks";

const BookBox = () => (
  <>
    <Menu/>
    <Routes>
      <Route exact path="/">
        <BookList/>
      </Route>
      <Route exact path="/books/new">
        <BookForm/>
      </Route>
      <Route path="/books/:bookId">
        <BookDetails/>
      </Route>
      <RolesRoute path="/secret" roles={['admin']}>
        <SecretBooks/>
      </RolesRoute>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Routes>
  </>
)

export default BookBox
