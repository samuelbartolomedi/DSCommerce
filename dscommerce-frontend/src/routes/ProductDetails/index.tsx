import './styles.css';
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import HeaderClientlient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import type { ProductDTO } from '../../models/product';

const product: ProductDTO = {
  id: 1,
  name: "Computador Gamer",
  description: "Este é um computador gamer de alta performance, ideal para jogos e tarefas exigentes.",
  price: 5000.00,
  imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/10-big.jpg?raw=true",
  categories: [
    { id: 1, name: "Eletrônicos" },
    { id: 2, name: "Computadores" }
  ]
}

export default function ProductDetails() {
  return (
    <>
      <HeaderClientlient />
        <main>
          <section id="product-details-section" className="dsc-container">
            <ProductDetailsCard product={product} />
            <div className="dsc-btn-page-container">
              <ButtonPrimary />
              <ButtonSecondary />
            </div>
          </section>
        </main>
    </>
  );
}