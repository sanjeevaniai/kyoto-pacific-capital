import { Layout } from "@/components/layout/Layout";
import { StatsBar } from "@/components/sections/StatsBar";
import { BriefIntro } from "@/components/sections/BriefIntro";

const Company = () => {
    return (
        <Layout>
            <div className="pt-24">
                <StatsBar />
                <BriefIntro />
            </div>
        </Layout>
    );
};

export default Company;
