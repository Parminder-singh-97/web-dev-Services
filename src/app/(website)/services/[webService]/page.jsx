import WebsiteDesigning from "@/components/Services/WebsiteDesigning";
import WebsiteDevelopment from "@/components/Services/WebsiteDevelopment";
import MobileAppDevelopment from "@/components/Services/MobileAppDevelopment";

export default function ServicePage({ params }) {
  const { webService } = params;

  const renderService = () => {
    switch (webService) {
      case "web-designing-services":
        return <WebsiteDesigning />;
      case "web-development-services":
        return <WebsiteDevelopment />;
      case "mobile-app-development-services":
        return <MobileAppDevelopment />;
      default:
        return (
          <div className="p-12 text-center">
            <h2 className="text-2xl font-bold">Service Not Found</h2>
          </div>
        );
    }
  };

  return <>{renderService()}</>;
}
