import './styles.css';
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import HeaderClientlient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function ProductDetails() {
  return (
    <>
          <HeaderClientlient />
          <main>
            <section id="product-details-section" className="dsc-container">
             <ProductDetailsCard />
              <div className="dsc-btn-page-container">
                <ButtonPrimary />
                <ButtonSecondary />
              </div>
            </section>
          </main>
        </>
  );
}