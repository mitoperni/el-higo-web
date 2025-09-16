import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation(['menu', 'common']);

  const menuCategories = [
    {
      id: 'portions',
      name: t('categories.portions', { ns: 'menu' }),
      items: t('items.portions', { returnObjects: true, ns: 'menu' }) || [],
      images: [
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop', // aguacate con langostinos - avocado dish with shrimp
        'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=300&h=200&fit=crop', // hummus - traditional hummus with pita
        'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop', // queso idiazábal - Spanish sheep cheese
        'https://images.unsplash.com/photo-1549888834-3ec93abae044?w=300&h=200&fit=crop', // jamón de Trevélez - Spanish cured ham
        'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=200&fit=crop', // tataki de atún - seared tuna tataki
        'https://images.unsplash.com/photo-1544975503-e1462e3466c0?w=300&h=200&fit=crop', // tabla de patés veganos - vegan pâté board
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop'  // crema del día - soup of the day
      ]
    },
    {
      id: 'sandwiches',
      name: t('categories.sandwiches', { ns: 'menu' }),
      items: t('items.sandwiches', { returnObjects: true, ns: 'menu' }) || [],
      images: [
        'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=300&h=200&fit=crop', // bocadillo de salmón - salmon sandwich
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop', // bocadillo vegetal - veggie sandwich
        'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300&h=200&fit=crop', // hamburguesa vegana - vegan burger
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop'  // hamburguesa ternera - beef burger
      ]
    },
    {
      id: 'salads',
      name: t('categories.salads', { ns: 'menu' }),
      items: t('items.salads', { returnObjects: true, ns: 'menu' }) || [],
      images: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop', // ensalada El Higo (mixta con frutas) - mixed salad with fruits
        'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=300&h=200&fit=crop', // espinacas y pavo - spinach and turkey salad
        'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop', // ensalada de ahumados - smoked fish salad
        'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=300&h=200&fit=crop'  // caprese di buffala - caprese with buffalo mozzarella
      ]
    },
    {
      id: 'meat_and_fish',
      name: t('categories.meat_and_fish', { ns: 'menu' }),
      items: t('items.meat_and_fish', { returnObjects: true, ns: 'menu' }) || [],
      images: [
        'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=200&fit=crop', // atún rojo - red tuna with vegetables
        'https://images.unsplash.com/photo-1559562589-d9bf87717ccf?w=300&h=200&fit=crop', // bacalao gratinado - gratinated cod
        'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop', // entraña de ternera - beef skirt steak
        'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=200&fit=crop', // carrillada de ternera - beef cheek in sauce
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop'  // plato infantil (pavo con papas) - children's turkey with potatoes
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t('title', { ns: 'menu' })}
          </h1>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text max-w-2xl mx-auto font-body">
            {t('subtitle', { ns: 'menu' })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-display font-bold text-dark-text mb-6 text-center border-b-2 border-terracotta pb-4">
                  {category.name}
                </h2>
                <div className="space-y-6">
                  {Array.isArray(category.items) && category.items.map((item, index) => (
                    <div key={index} className="group">
                      <div className="relative overflow-hidden rounded-lg mb-3">
                        <img
                          src={category.images[index] || category.images[0]}
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-2 right-2 bg-terracotta text-white px-2 py-1 rounded text-sm font-semibold">
                            {item.price}
                          </div>
                        </div>
                      </div>
                      <h3 className="font-body font-semibold text-dark-text text-lg leading-tight mb-2">
                        {item.name}
                        {item.price && (
                          <span className="ml-2 text-terracotta font-bold">
                            {item.price}
                          </span>
                        )}
                      </h3>
                      <p className="font-body text-dark-text text-sm leading-relaxed opacity-75 mb-2">
                        {item.description}
                      </p>
                      {item.options && (
                        <p className="font-body text-green-leaf text-xs leading-relaxed">
                          {item.options}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <p className="text-dark-text mb-4 font-body text-sm">
              {t('allergens', { ns: 'menu' })}
            </p>
            <p className="text-green-leaf mb-6 font-body text-sm font-semibold">
              {t('note', { ns: 'menu' })}
            </p>
            <h3 className="text-2xl font-display font-bold text-dark-text mb-4">
              {t('hero.cta', { ns: 'common' })}
            </h3>
            <p className="text-dark-text mb-6 font-body">
              {t('reservations.note', { ns: 'common' })}
            </p>
            <a
              href={`https://wa.me/34858984102?text=${encodeURIComponent(
                t('reservations.note', { ns: 'common' })
              )}`}
              className="inline-flex items-center bg-terracotta hover:bg-green-leaf text-white font-body font-bold py-3 px-8 rounded-lg transition-colors duration-300 mr-4"
            >
              {t('reservations.whatsapp', { ns: 'common' })}
            </a>
            <a
              href="#"
              className="inline-flex items-center bg-green-leaf hover:bg-terracotta text-white font-body font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              {t('reserve_button', { ns: 'menu' })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;