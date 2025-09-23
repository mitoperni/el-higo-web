import { useTranslation } from "react-i18next";

const HowToFindUsPage = () => {
  const { t } = useTranslation();

  const handleOpenMaps = () => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // Para móviles: usar protocolo geo para abrir app nativa
      window.location.href = "geo:37.1831339,-3.5926795?q=El+Higo";
    } else {
      // Para escritorio: abrir Google Maps en nueva pestaña
      window.open(
        "https://www.google.com/maps/place/El+Higo/@37.1831339,-3.5952544,17z/data=!3m1!4b1!4m6!3m5!1s0xd71fcc66cb5daeb:0xb4bb89f0659d068a!8m2!3d37.1831339!4d-3.5926795!16s%2Fg%2F11bwh5cmx7?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D",
        "_blank"
      );
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-cream">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t("howToFindUs.title")}
          </h1>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text max-w-2xl mx-auto font-body">
            {t("howToFindUs.subtitle")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Directions */}
            <div>
              <h2 className="text-3xl font-display font-bold text-dark-text mb-6">
                {t("contact.address")}
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-terracotta mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-body text-dark-text font-semibold">
                      {t("howToFindUs.address")}
                    </p>
                    <p className="font-body text-dark-text">
                      {t("howToFindUs.city")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-terracotta mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-body text-dark-text font-semibold">
                      {t("contact.phone")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-dark-text mb-4">
                  {t("howToFindUs.instructions")}
                </h3>
                <p className="font-body text-dark-text leading-relaxed">
                  {t("howToFindUs.directions")}
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.8856!2d-3.5926795!3d37.1831339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcc66cb5daeb%3A0xb4bb89f0659d068a!2sEl%20Higo!5e0!3m2!1sen!2sus!4v1726934400000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="El Higo Location"
                  className="w-full h-96"
                ></iframe>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={handleOpenMaps}
                  className="inline-flex items-center bg-terracotta text-white px-6 py-3 rounded-lg font-body font-semibold hover:bg-green-leaf transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  {t("howToFindUs.takeMeThere")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Tips */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-dark-text text-center mb-12">
              {t("howToFindUs.gettingHereTips")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-terracotta text-white p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0V7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-dark-text">
                    {t("howToFindUs.walking.title")}
                  </h3>
                </div>
                <p className="font-body text-dark-text">
                  {t("howToFindUs.walking.description")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-leaf text-white p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-4a2 2 0 00-2-2H8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-dark-text">
                    {t("howToFindUs.publicTransport.title")}
                  </h3>
                </div>
                <p className="font-body text-dark-text">
                  {t("howToFindUs.publicTransport.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToFindUsPage;
