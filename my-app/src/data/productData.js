// src/data/productData.js

// Import images
import ring1 from '../images/gold/rings/ring1.jpeg';
import ring2 from '../images/gold/rings/ring2.jpeg';
import ring3 from '../images/gold/rings/ring3.jpeg';
import ring4 from '../images/gold/rings/ring4.jpeg';
import ring5 from '../images/gold/rings/ring5.jpeg';

export const allProducts = {
  gold: {
    rings: [
      { 
        id: 1, 
        name: 'Gold Ring', 
        price: '$199', 
        grams: '12 grams', 
        details: '916 hallmark', 
        image: ring1,
        description: 'Beautifully crafted gold ring with intricate designs. Perfect for special occasions.',
        specifications: {
          material: 'Pure Gold',
          purity: '916 BIS Hallmark',
          weight: '12 grams',
          size: 'Adjustable',
          finish: 'High Polish'
        }
      },
      { 
        id: 2, 
        name: 'Gold Ring 2', 
        price: '$299', 
        grams: '15 grams', 
        details: '916 hallmark', 
        image: ring2,
        description: 'Elegant gold ring with modern design. Ideal for everyday wear.',
        specifications: {
          material: 'Pure Gold',
          purity: '916 BIS Hallmark',
          weight: '15 grams',
          size: 'Adjustable',
          finish: 'Matte'
        }
      },
      { 
        id: 3, 
        name: 'Gold Ring 3', 
        price: '$399', 
        grams: '18 grams', 
        details: '916 hallmark', 
        image: ring3,
        description: 'Traditional gold ring with cultural motifs. Perfect for ceremonies.',
        specifications: {
          material: 'Pure Gold',
          purity: '916 BIS Hallmark',
          weight: '18 grams',
          size: 'Adjustable',
          finish: 'Antique'
        }
      },
      { 
        id: 4, 
        name: 'Gold Ring 4', 
        price: '$499', 
        grams: '20 grams', 
        details: '916 hallmark', 
        image: ring4,
        description: 'Contemporary gold ring with diamond accents. Suitable for special events.',
        specifications: {
          material: 'Pure Gold',
          purity: '916 BIS Hallmark',
          weight: '20 grams',
          size: 'Adjustable',
          finish: 'High Polish with Diamond Setting'
        }
      },
      { 
        id: 5, 
        name: 'Gold Ring 5', 
        price: '$599', 
        grams: '22 grams', 
        details: '916 hallmark', 
        image: ring5,
        description: 'Premium gold ring with intricate craftsmanship. A statement piece.',
        specifications: {
          material: 'Pure Gold',
          purity: '916 BIS Hallmark',
          weight: '22 grams',
          size: 'Adjustable',
          finish: 'Premium Polish'
        }
      }
    ],
    chains: [
      // Add chain products here
    ]
  },
  silver: {
    rings: [
      // Add silver products here
    ]
  },
  diamond: {
    rings: [
      // Add diamond products here
    ]
  }
};

export default allProducts;