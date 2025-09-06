import { faker } from '@faker-js/faker';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const categories = ['Handloom Sarees', 'Premium Fabrics', 'Silk Scarves', 'Traditional Clothing'];

export const generateProducts = (count: number): Product[] => {
  return Array.from({ length: count }, () => {
    const category = faker.helpers.arrayElement(categories);
    return {
      id: faker.string.uuid(),
      name: `${faker.commerce.productAdjective()} ${category.slice(0, -1)}`,
      price: parseFloat(faker.commerce.price({ min: 800, max: 25000, dec: 0 })),
      description: faker.commerce.productDescription(),
      category: category,
      image: `https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500/${faker.color.rgb({ format: 'hex', casing: 'upper' }).substring(1)}/FFFFFF?text=${encodeURIComponent(category)}`
    };
  });
};

export const mockProducts = generateProducts(20);
