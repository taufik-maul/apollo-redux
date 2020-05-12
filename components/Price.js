const Price = ({price, showDiscount}) => {
    const finalPrice = price.final_price;
    const oldPrice = price.regular_price;
    return (
        <div className="price">
            {(showDiscount && (finalPrice.currency < oldPrice.currency))?<span className="old-price">{`${oldPrice.currency} ${oldPrice.value}`}</span>:''}
            <span className="final_price">{`${finalPrice.currency} ${finalPrice.value}`}</span>
        </div>
    );
}

export default Price;
