import AddToCartButton from "./AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const {
    imageUrl,
    description,
    name,
    basePrice,
    sizes,
    extraIncgredientPrices,
  } = item;
  const hasSizesOrExtras =
    sizes?.length > 0 || extraIncgredientPrices?.length > 0;
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          src={imageUrl}
          alt="pizza"
          className="max-h-auto max-h-24 block mx-auto"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
      <AddToCartButton
        hasSizes={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
      <button
        type="button"
        onClick={onAddToCart}
        className="mt-4 bg-primary text-white rounded-full px-8 py-2"
      >
        {hasSizesOrExtras ? (
          <span>Add to cart (from ${basePrice})</span>
        ) : (
          <span> Add to cart ${basePrice}</span>
        )}
      </button>
    </div>
  );
}