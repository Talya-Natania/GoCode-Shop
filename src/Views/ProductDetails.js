import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
// import myContext from "../MyContext";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [id]);
  return (
    // <myContext.Consumer>
    //   {([shopingCart, addItem, removeItem]) => (
    <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={product?.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                color="blue"
              >
                {product?.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {product?.description}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                // onClick={() =>
                //   addItem(
                //     product?.image,
                //     product?.title,
                //     product?.price,
                //     id
                //   )
                // }
              >
                Add To Cart
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div" color="blue">
              {product?.price}$
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    //   )}
    // </myContext.Consumer>
  );
}
export default ProductDetails;
