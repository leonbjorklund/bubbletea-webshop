import { useProduct } from "../ProductContext";

export default function EditForm() {

  const { productList } = useProduct();

  return (
    <form>
      <h1>this is edit form</h1>
      <input type="text" placeholder={productList[0].title}/>
    </form>
  )
}
