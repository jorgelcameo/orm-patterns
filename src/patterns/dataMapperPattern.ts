// plain-object
class Product {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly price: number
  ) {}
}

// data-mapper
class ProductMapper {
  private readonly products: Product[] = [];

  save(product: Product): Product | undefined {
    const newProduct = new Product(product.id, product.name, product.price);
    this.products.push(newProduct);

    return this.products[this.products.length - 1];
  }
}

export const run = () => {
  const product = new Product(1, 'Laptop', 1500);
  const productMapper = new ProductMapper();
  console.log(productMapper.save(product));
};
