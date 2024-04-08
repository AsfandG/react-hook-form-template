import Category from "./Category";
import { getAllCategoryApi } from "./services/CategoryApi";

const CategoryPage = async () => {
  const category = await getAllCategoryApi();
  
  return (
    <>
      <h1 className="text-blue-700 text-3xl text-center my-10">CATEGORY CRUD</h1>
      <Category category={category.data} />
    </>
  );
}

export default CategoryPage;
