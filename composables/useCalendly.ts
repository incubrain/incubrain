const openCalendlyPopup = () => {
  if (process.client && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/incubrain/obligation-free-consultation?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=4edb88'
    })
  }
}

export default function useCalendly() {
  return {
    openCalendlyPopup
  }
}
