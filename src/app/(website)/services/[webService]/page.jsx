import WebsiteDesigning from "@/components/Services/WebsiteDesigning";
import WebsiteDevelopment from "@/components/Services/WebsiteDevelopment";
import MobileAppDevelopment from "@/components/Services/MobileAppDevelopment";
import PowerBIDashboard from "@/components/Services/PowerBIDashboard";

export default async function ServicePage({ params }) {
  const { webService } = await params;

  const renderService = () => {
    switch (webService) {
      case "web-designing-services":
        return <WebsiteDesigning />;
      case "web-development-services":
        return <WebsiteDevelopment />;
      case "mobile-app-development-services":
        return <MobileAppDevelopment />;
      case "powerbi-dashboard-services":
        return <PowerBIDashboard />;



      default:
        return (
          <div className="p-12 text-center my-40">
            <h2 className="text-2xl font-bold">Service Not Found</h2>
          </div>
        );
    }
  };

  return <>{renderService()}</>;
}
