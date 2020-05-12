import Kotak from "./Kotak";
import { Grid } from "@material-ui/core";

const CategoryList = ({categoryData}) => {

    if(!categoryData)
        return <div className="no-items">No Items</div>
        
    return (
        <div className="category-wrapper">
            <Grid container className="category-items" spacing={3}>
            {categoryData.map((category) => (
                <Grid item key={category.id} xs={6} sm={6} md={4}>
                    <Kotak 
                        key={category.id} 
                        cardClass="category-item" 
                        title={category.name} 
                        link={
                            {
                                label:"Shop Now",
                                href:"/category/[url_key]",
                                as:`/category/${category.url_key}`
                            }
                        } 
                    />
                </Grid>
            ))}
            </Grid>
        </div>
    );
}

export default CategoryList;
