import { ErrorAlert } from "@/components/ErrorAlert";
import { Loader } from "@/components/loader";
import PageTitle from "@/components/PageTitle";
import { getAllIntegrationQueryFn } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import IntegrationCard from "./_components/integration-card";

const Integrations = () => {
  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["integration_list"],
    queryFn: getAllIntegrationQueryFn,
  });

  const integrations = data?.integrations || [];

  return (
    <div className="flex flex-col !gap-5">
      <PageTitle
        title="Integrations & apps"
        subtitle="Connect all your apps directly from here. You need to connect these apps"
      />

      <ErrorAlert isError={isError} error={error} />

      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 text-muted-foreground">
          {isFetching || isError ? (
            <div className="flex items-center justify-center min-h-[30vh]">
              <Loader size="lg" color="black" />
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {integrations.map((integration) => (
                  <IntegrationCard
                    key={integration.app_type}
                    isDisabled={
                      integration.app_type === "GOOGLE_MEET_AND_CALENDAR"
                        ? false
                        : true
                    }
                    appType={integration.app_type}
                    title={integration.title}
                    isConnected={integration.isConnected}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Integrations;
