function addToCart(item) {
  return {
    type: "ADD_TO_CART",
    item: item,
  };
}

function removeCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    id: id,
  };
}

function updateCart(id, qty) {
  return {
    type: "UPDATE_CART",
    id: id,
    qty: qty
  };
}

export { addToCart, removeCart, updateCart };
