import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation(['menu', 'common']);

  const menuCategories = [
    {
      id: "starters",
      name: t("categories.starters", { ns: "menu" }),
      items: t("items.starters", { returnObjects: true, ns: "menu" }) || [],
      images: [
        "https://www.gallinablanca.es/wp-content/uploads/2006/04/15401139853c45e78482f6a489865cab8522b47b6e.jpg", // aguacate con langostinos - avocado dish with shrimp
        "https://www.daisybrand.com/wp-content/uploads/2019/12/creamy-hummus-dip2-770x628_3571.jpg", // hummus - traditional hummus with pita
        "https://i0.wp.com/bardonairecomidasadomicilio.com/wp-content/uploads/2020/09/queso-racion-media-original.jpg?fit=1400%2C1050&ssl=1", // queso idiazábal - Spanish sheep cheese
        "https://www.jamonesvallejo.com/wp-content/uploads/2021/05/Diferencias-entre-el-jamon-de-Trevelez-y-jamon-de-la-Alpujarra.jpg", // jamón de Trevélez - Spanish cured ham
        "https://www.pescadoscharo.es/wp-content/uploads/2018/05/tataki-atun.jpeg", // tataki de atún - seared tuna tataki
        "https://cdn.recipes.lidl/images/_Aliases/es-ES/recipe_detail_1264x494/336bf0d2eb14-banner-pates-veganos.jpg", // tabla de patés veganos - vegan pâté board
        "https://imag.bonviveur.com/emplatado-final-del-pure-de-verduras.jpg", // crema del día - soup of the day
      ],
    },
    {
      id: "sandwiches",
      name: t("categories.sandwiches", { ns: "menu" }),
      items: t("items.sandwiches", { returnObjects: true, ns: "menu" }) || [],
      images: [
        "https://www.hola.com/horizon/landscape/54f537cc23ab-bocadillo-gourmet-salmon-compota-tomate-t.jpg", // bocadillo de salmón - salmon sandwich
        "https://img2.rtve.es/v/5170242?w=1600&preview=1556641967805.png", // bocadillo vegetal - veggie sandwich
        "https://img2.rtve.es/n/2119800", // hamburguesa vegana - vegan burger
        "https://www.carniceriademadrid.es/wp-content/uploads/2024/12/goat-cheese-and-caramelized-onion-burger-2023-11-27-05-00-17-utc-scaled.jpg", // hamburguesa ternera - beef burger
      ],
    },
    {
      id: "salads",
      name: t("categories.salads", { ns: "menu" }),
      items: t("items.salads", { returnObjects: true, ns: "menu" }) || [],
      images: [
        "https://i.ytimg.com/vi/hh0uzCsIzDo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBroivJpcKxlpAsnZQ3taUSIlhyug", // ensalada El Higo (mixta con frutas) - mixed salad with fruits
        "https://static.bainet.es/clip/bcf91562-8212-41dd-af02-96ec65a7f91a_source-aspect-ratio_1600w_0.jpg", // espinacas y pavo - spinach and turkey salad
        "https://www.gastronomiaycia.com/wp-content/uploads/2015/11/ensalada_ahumados_frutos1p.jpg", // ensalada de ahumados - smoked fish salad
        "https://imag.bonviveur.com/ensalada-de-burrata-con-tomate-y-pesto-abierta.jpg", // caprese di buffala - caprese with buffalo mozzarella
      ],
    },
    {
      id: "meat_and_fish",
      name: t("categories.meat_and_fish", { ns: "menu" }),
      items:
        t("items.meat_and_fish", { returnObjects: true, ns: "menu" }) || [],
      images: [
        "https://okdiario.com/img/2018/11/14/receta-de-wok-de-atun-655x368.jpg", // atún rojo - red tuna with vegetables
        "https://content-cocina.lecturas.com/medio/2024/10/15/wok-de-arroz-integral-con-verduras-y-bacalao_00000000_241030153503_1200x1200.jpg", // bacalao gratinado - gratinated cod
        "https://www.carnescarrasquilla.es/wp-content/uploads/2022/04/Entrana-de-ternera-que-es-y-como-prepararla-Carnes-Carrasquilla.jpg", // entraña de ternera - beef skirt steak
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMrSgusquJoIduP9IxCKgHds5gYsDGumINMd6__yLJ53dUlL42ehTA8dHiklUm7fEa_djlgRgUauXd4w-cxBaRB7alcFkdVwv4fDdGtiSrIVlTVBO3N_aQ_N9OvqI0f2mWUvs1SS7FlS0/s1600/DSCN2471.JPG", // carrillada de ternera - beef cheek in sauce
        "https://media-cdn.tripadvisor.com/media/photo-s/07/ea/2a/71/pavo-a-la-plancha-con.jpg", // plato infantil (pavo con papas) - children's turkey with potatoes
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t("title", { ns: "menu" })}
          </h1>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text max-w-2xl mx-auto font-body">
            {t("subtitle", { ns: "menu" })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-display font-bold text-dark-text mb-6 text-center border-b-2 border-terracotta pb-4">
                  {category.name}
                </h2>
                <div className="space-y-6">
                  {Array.isArray(category.items) &&
                    category.items.map((item, index) => (
                      <div key={index} className="group">
                        <div className="relative overflow-hidden rounded-lg mb-3">
                          <img
                            src={category.images[index] || category.images[0]}
                            alt={item.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
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
                          <p className="font-body text-terracotta text-xs leading-relaxed">
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
              {t("allergens", { ns: "menu" })}
            </p>
            <p className="text-green-leaf mb-6 font-body text-sm font-semibold">
              {t("note", { ns: "menu" })}
            </p>
            <h3 className="text-2xl font-display font-bold text-dark-text mb-4">
              {t("hero.cta", { ns: "common" })}
            </h3>
            <p className="text-dark-text mb-6 font-body">
              {t("reservations.note", { ns: "common" })}
            </p>
            <a
              href={`https://wa.me/34858984102?text=${encodeURIComponent(
                t("reservations.note", { ns: "common" })
              )}`}
              className="inline-flex items-center bg-terracotta hover:bg-green-leaf text-white font-body font-bold py-3 px-8 rounded-lg transition-colors duration-300 mr-4"
            >
              {t("reservations.whatsapp", { ns: "common" })}
            </a>
            <a
              href="#"
              className="inline-flex items-center bg-green-leaf hover:bg-terracotta text-white font-body font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              {t("reserve_button", { ns: "menu" })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;