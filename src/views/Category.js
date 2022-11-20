import {useParams} from "react-router-dom";
import Item from "../componentes/Item";
import {Layout} from "../componentes/Layout";
import {item} from "../mocks/item.mock";

const CategoryView =()=>{
    const { Category } = useParams();
    const Categories = item.filter((articulo) => articulo.Category === Category);

    return(
        <Layout>
            {Categories.map((articulo)=>(
                <Item articulo={articulo}/>
            ))}
        </Layout>
    );
};

export default CategoryView;