import { useTranslation } from "react-i18next";
import Icons from "../components/ui/Icons";

const HowToFindUsPage = () => {
  const { t } = useTranslation();

  const handleOpenMaps = () => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // Para iOS: usar protocolo maps para abrir app nativa de Apple Maps
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = "maps:?q=El+Higo&ll=37.1831339,-3.5926795";
      } else {
        // Para Android: usar protocolo geo
        window.location.href = "geo:37.1831339,-3.5926795?q=El+Higo";
      }
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
                  <Icons.Location className="w-6 h-6 text-terracotta mt-1 mr-3" />
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
                  <Icons.Phone className="w-6 h-6 text-terracotta mt-1 mr-3" />
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
                  <Icons.ExternalLink className="w-5 h-5 mr-2" />
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
                    <Icons.Map className="w-6 h-6" />
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
                    <Icons.Document className="w-6 h-6" />
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
