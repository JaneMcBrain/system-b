import PartnerBanner from "../../components/PartnerSlider/PartnerSlider";

export default function Partner(){

  return(
    <div>
      <div className="partner-section">
        <h1 className="h3 spacing-bottom-100">
          <span>Unsere</span>
          <span className="text-outline">Partner</span>
        </h1>
        <PartnerBanner />
      </div>
    </div>
  )
}